# SaaS boilerplate on AWS, SST, NextJS, Chakra, Stripe.

## Carattteristiche:

1. Permettere il sign up login cosi da avere API protette
   Come creare un sistema di autenticazione funzionante

   - tramite Google
   - tramite Email e PSW
   - con MFA
   - con multi tenant

   Come funziona il Login?

   Il login e l'accesso privato alle API ha due step:

   1. un servizio controlla che una persona che dice di essere quella persona sia effettivamente quella persona. Ad esempio io clicco login in una pagina, immetto la mia email perche dico al servizio che dietro a quella mail ci sono io.
      Il servizio controlla se sono io ad esempio chiedendomi una password che ho usato durante la registrazione, se la password è giusta allora quel servizio sputerà fuori dei "claims". Questi claims contengo qualcosa del tipo "si è vero, questa persona è davvero lei". Questa comunicazione tra il mio servizio ed il servizio che mi manda il claim avviene normalmente in maniera criptata e quindi un url/clienId e una secretKey vengono scambiate. Una volta che siamo sicuri che questa sia la persona giusta, dobbiamo dare alla persona le credenziali di accesso alla API
      Mi ha mandato access_token, id_token e claims

      - NB: La parte di MFA precede l'invio del CLAIM!

   1. Le credenziali di accesso a tempo per la API si chiamano session keys e vengono date dal mio servizio al client cosí che il client possa usare le API private. Queste session key hanno normalmente una durata limitata per sicurezza.
      Si accede alle api protette tramite un url e una session key. La session key, spesso in formato jwt, è una chiave criptata (che quindi può avere una secret key associata). La session key viene generata utilizzando id_token e access_token che contengono tutti le infomrazioni necessarie per la creazione della session_key.

   1. Io ho aggiunto un authoriser rispetto all'esempio dato da SST cosi che tutte le API possano essere sicure
   1. Vorrei anche creare un servizio di email/psw eventually.

1. Permettere il pagamento
1. Avere un database del profilo utente
1. Avere una API con una serie di lambda e serverless services che lavorino per operations e business logic (https://blog.theodo.com/2023/02/state-machine-sst/)
1. Avere una serie di cronjob con lambda e serverless services che lavorino per operations e business logic
1. Avere un ulteriore Database con

## How does a login system works for the cloud services

A login system is a service that at the same time allows:

- a user to get access to private data
- the service to confirm the identity of the user and to give them access to private data

All this kind of login system have to run through 2 steps:

1. Making sure that the user that comes to the service is actually the person they claim to be
1. Creating a secret key that can be used at every subsequent communication between the user and the cloud services, that will allow the services to trust the user and give them access to the private data

The first step works in this way: The user comes to a cloud service claiming they are johnbutler@gmail.com. The service needs to make sure that this user is actually a person that can use the johnbutler@gmail.com email. The simplest way to check this is by using a secret password. Only the login service and the user should know the password, if these match, also the login service can claim that this user is who claims to be.

The second step then works in this manner: once the login system recognises the user, can claim to the cloud service that said user deserves a secret key for the communication, a key that grants the user access to all their cloud services. This key is usually called a "session key". The word session implies that this key will have a temporary validity, which will expire after a while (hours or days depending on the settings) to decrease the cyber security risks.

How does this get implemented?

To get Step 1 done we need a service that basically controls the email - password, or something similar and more sophisticated and secure but that achieves the same goal.
One example is GMail. GMail allows other services to connect to it and run the process of checking the email/password and it results in a GMail claim. The claim will be a claim of confirmation or denial, meaning the user is who they claim to be or not. This claim is then sent to our service for the creation os a session key.

## DynamoDB

DynamoDB is a very speedy and flexible database. It is a NoSQL database, meaning that each table does not contain a static bit table with a fixed number of columns, but it is made of "documents". The word document does not mean something like a Microsoft Word document, it just means a bunch on indexable pieces of data often access as JSONs.
Indexable data means that each JSON will have a key or pairs of keys that allow DynamoDB to very quickly retrieve the "document" you want. This means that when you query DynamoDB you will have to use the indexing keys called Primary and Seconday Keys.
You can query DynamoDB using keys that are not the prefixed Primary or Secondary keys, but it will be much slower and more expensive.

When you use DynamoDB and you create a new table, you have to set up the Primary Keys that you won;t be able to change after the setup is finished.
