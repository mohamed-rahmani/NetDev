# NetDev

**NetDev** est une application inspirée de Threads, construite avec **Next.js**, **Prisma** pour la gestion de la base de données, **React** pour l'interface utilisateur, et **NextAuth** pour l'authentification. J'ai créé cette application dans le but de tester mes compétences et connaissances sur le framework **Next.js**.

## Fonctionnalités

- **Système d'authentification** : Connexion et inscription via **NextAuth** avec le fournisseur OAuth GitHub.
- **Publication de threads** : Les utilisateurs peuvent créer et partager des messages courts avec des images.
- **Like et commentaires** : Les utilisateurs peuvent aimer et commenter les publications.
- **Système de suivi** : Suivez les autres utilisateurs pour voir leurs threads.

## Installation et configuration

### Prérequis

Avant de démarrer, assurez-vous d'avoir installé les éléments suivants sur votre machine :

- [Node.js](https://nodejs.org/) (version 22.8+)
- [PostgreSQL](https://www.postgresql.org/)

### Étapes d'installation

1. Clone le dépôt Git :

   ```bash
   git clone https://github.com/ton-utilisateur/NetDev.git
   cd NetDev
   ```
2. Installez les dépendances :

   ```bash
   npm install
   ```
3. Configurez l'environnement :
   
   Créez un fichier .env à la racine du projet et configurez les variables suivantes :
   ```bash
   DATABASE_URL="postgresql://user:password@localhost:5432/netdev_db"
   NEXTAUTH_SECRET="votre_secret_pour_nextauth"
   GITHUB_ID="votre_id"
   GITHUB_SECRET="votre_secret"
   UPLOADTHING_SECRET="votre_secret"
   UPLOADTHING_APP_ID="votre_app_id"
   ```
4. Configurez Prisma :
   
   Après avoir configuré ton .env, exécute les commandes suivantes pour initialiser ta base de données et générer le client Prisma :
   ```bash
   npm prisma migrate dev --name init
   npm prisma generate
   ```

5. Lancer l'application en mode développement :
   ```bash
   npm run dev
   ```
   L'application sera disponible sur http://localhost:3000.

## Technologies utilisées

- **Next.js** : Framework React pour les applications full-stack.
- **NextAuth** : Solution complète d'authentification pour Next.js.
- **Prisma** : ORM pour interagir avec la base de données.
- **UPLOADTHING** : Solution pour permettre aux utilisateurs d'upload des images sur leur post.
- **React** : Bibliothèque JavaScript pour construire des interfaces utilisateur.
- **Tailwind CSS** : Pour le design et le style des composants.

## Quelques captures d'écran
   ![image](https://github.com/user-attachments/assets/5388fad2-cbd6-43fb-a692-4268b898c9e3)
   
   ![image](https://github.com/user-attachments/assets/86a8ea68-2271-498e-a7ec-72f956d9c430)
   
   ![image](https://github.com/user-attachments/assets/2d40c1f1-bd12-471f-aab6-13408959a43a)

## Contribution

Si vous souhaitez contribuer à l'amélioration de NetDev, suivez ces étapes :
1. Fork le projet
2. Créez une nouvelle branche avec une description claire.
3. Envoyez une pull request.
