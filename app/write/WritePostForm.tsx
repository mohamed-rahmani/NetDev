"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  useZodForm,
} from "@/components/ui/form";
import { Loader } from "@/components/ui/loader";
import { ContentTextArea } from "@/src/feature/post/ContentTextArea";
import { PostLayout } from "@/src/feature/post/PostLayout";
import { UploadButton } from "@/utils/uploadthing";
import { User } from "@prisma/client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";
import { deleteImage } from "./image-delete.action";

const Schema = z.object({
  content: z.string().min(1).max(500),
  image: z.string().max(200).optional(),
});

export type WritePostFormValues = z.infer<typeof Schema>;

type WritePostFormpProps = {
  user: User;
  onSubmit: (values: WritePostFormValues) => Promise<string>;
};

type UploadedImage = {
  url: string;
  name: string;
  key: string;
};

export const WritePostForm = ({ user, onSubmit }: WritePostFormpProps) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [imageKey, setImageKey] = useState<string>("");

  const form = useZodForm({
    schema: Schema,
  });
  const router = useRouter();
  const path = usePathname();

  const handleDeleteImage = async () => {
    if (imageKey) {
      try {
        await deleteImage(imageKey);
        setImageUrl("");
        setImageKey("");
      } catch (error) {
        console.error(error);
        alert("Failed to delete file");
      }
    }
  };

  const handleImageUploadComplete = (url: UploadedImage[]) => {
    setImageUrl(url[0].url);
    setImageKey(url[0].key);
    form.setValue("image", url[0].url);
  };

  return (
    <PostLayout user={user}>
      <Form
        form={form}
        onSubmit={async (values) => {
          const postId = await onSubmit({ ...values });
          console.log("Submit imageUrl :", imageUrl);
          console.log("Submit values :", values);
          router.push(`/posts/${postId}`);
          router.refresh();
        }}
      >
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <ContentTextArea placeholder="Eh...What's up Doc" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <ContentTextArea className="hidden" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="mt-4">
          {imageUrl ? (
            <div className="relative">
              <picture>
                <Image
                  src={imageUrl}
                  alt="Uploaded Image"
                  width="200"
                  height="200"
                  className="object-cover w-auto h-auto rounded-md"
                />
              </picture>
              {imageUrl && (
                <Button
                  type="button"
                  size="sm"
                  className="bg-red-600 text-white mt-4"
                  onClick={async () => {
                    await handleDeleteImage();
                  }}
                >
                  Remove
                </Button>
              )}
            </div>
          ) : (
            <UploadButton
              className="ut-button:bg-gradient-to-r from-fromTitle via-interTitle to-toTitle"
              appearance={{
                button: "px-3 h-8 w-auto after:bg-bacground text-xs",
                container: "items-start",
                allowedContent: "hidden",
              }}
              content={{
                button({ ready, isUploading }) {
                  if (ready) {
                    if (isUploading) {
                      return (
                        <div className="flex items-center gap-1">
                          <Loader size={16} />
                          Loading
                        </div>
                      );
                    }
                    return <div>Add image</div>;
                  }
                  return (
                    <div className="flex items-center gap-1">
                      <Loader size={16} />
                      Loading
                    </div>
                  );
                },
              }}
              endpoint={"productImage"}
              onClientUploadComplete={handleImageUploadComplete}
              onUploadError={(error) => {
                window.alert(`${error?.message}`);
              }}
            ></UploadButton>
          )}
        </div>

        <div className="flex items-center w-full justify-between mt-4">
          <p className="text-sm text-gray-600">Anyone can reply your post</p>
          <Button size="sm" type="submit">
            {path == "/write" ? "Publish" : "Reply"}
          </Button>
        </div>
      </Form>
    </PostLayout>
  );
};
