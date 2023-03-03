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

1. Permettere il pagamento
1. Avere un database del profilo utente
1. Avere una API con una serie di lambda e serverless services che lavorino per operations e business logic (https://blog.theodo.com/2023/02/state-machine-sst/)
1. Avere una serie di cronjob con lambda e serverless services che lavorino per operations e business logic
1. Avere un ulteriore Database con
