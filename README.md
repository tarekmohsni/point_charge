## Spécifications techniques:
- **Node.js/TypeScript**
- **PostgreSQL**
- **Express.js**
- **docker** :  vous pouvez installer docker. [Check this tutorial for ubuntu](https://docs.docker.com/engine/install/ubuntu/) or [Check this tutorial for windows](https://docs.docker.com/docker-for-windows/install/).

## Exécuter la base de données:

Nous utilisons l'image docker postgres et pour lancer le conteneur postgres, nous devons lancer la commande suivante :
* docker run --name postgres-container -e POSTGRES_PASSWORD=88CL41GSZafo -e POSTGRES_DB=charge_véhicule -d -p 5432:5432 postgres

## projet:
On a implémenté un appel API pour créer un point de charge

### Structure du projet:
On a choisi la structure suivante:
* objet_métier: définisse la logique métier
* controller: responsable de la gestion des requêtes et des réponses HTTP
* helper: contient les fonctions réutilisables
* model: présente les entités
* route: définisse les endpoints
* config: contient les fichiers de configuration

Cette structure est bien organisée et extensible. Elle assure également la modulalité de l'application et la séparation des responsabilités.

### Exécuter le projet:
Pour lancer le projet, nous avons besoin d'avoir le conteneur de la base de données, nous devons lancer cette commande :
* npm install
* npm start
### Utilisation de Postman pour tester l'API