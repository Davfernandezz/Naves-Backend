# Naves Coworking Backend🛰️

Welcome to my Naves Backend project, I hope you like it!☄️
<br><br>
<img src="https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/9d0fd0c4-5c7f-4122-b884-64a1e1685d2d" width="400">
</a>

<details>
  <summary>Table of Contents📝</summary>
  <ol>
 <li><a href="#description">Description</a></li>
    <li><a href="#objetive">Objetive</a></li>
    <li><a href="#deploy-">Deploy</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#database-schema">Database Schema</a></li>
    <li><a href="#local-installation">Local installation</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#future-functionalities️">Future functionalities</a></li>
    <li><a href="#development">Development</a></li>
    <li><a href="#appreciations">Appreciations</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>
<br>

## Description📚
This project consists of transforming the management of a coworking space into a fluid and automated experience. Through an innovative application, the aim is to optimize access control, facilitating the real-time registration of user entries and exits. In addition, the tool will allow you to manage work room reservations and offer accurate administrative reports for more efficient decision making. All this, in an intuitive and easy-to-use environment, designed to modernize the administration of these collaborative spaces.


## Objetive🎯
This project aims to develop an application for access control and management of a coworking space. The application allows recording and monitoring entry and exit of people, manage work rooms and generate administrative reports.

## Deploy 🚀
<div align="center">
    <a href=""><strong> Click here! </strong></a>🚀🚀🚀
</div>

## Stack📒
Used technology:
<div align="center">
<a>
    <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="express" />
</a>
<a>
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white" alt="node" />
</a>
<a>
    <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black" alt="js" />
</a>
<a>
    <img alt="typescript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="ts" />
</a>
<a>
    <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
</a>
<a>
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="docker" />
</a>
<a>
    <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="jwt" />
</a>
<a>
    <img src="https://img.shields.io/badge/bcrypt-3178C6?style=for-the-badge&" alt="ts" />
</a>
</div>


## Database Schema📋
<img width="1423" src="">

    - Person - Access: A person can have multiple accesses. One to one relationship many.

    - Room - Access: A room can have multiple entrances. One to many relationship.

    - Person - Access_History: A person can have multiple access records access history. One to many relationship.

    - Room - Access_History: A room can have multiple access history records access. One to many relationship.

    - Access - Access_History: Each access generates a record in the access history access. One to one relationship.

## Local installation🧾
1. Install docker and create a mysql container
1. Clone the repository
2.  ``` $ npm install  ```
3. We connect our repository with the database
4. ``` $ npm run dev ``` 
5. ``` $ We execute the migrations $ npm run migrate ``` 
6. ``` $ We run the seeders $ npm run db:seed ``` 
7. ...


## Endpoints🧩
<details>
<summary>Authentication🔑</summary>

- **Register user**

          POST http://localhost:4000/api/auth/register

    body:

    ```js
        {
            "email": "david@david.com",
            "password": "123456789"
        }
    ```

<br>

- **Login user**	

          POST http://localhost:4000/api/auth/login

    body:

    ```js
        {
            "email": "david@david.com",
            "password": "123456789"
        }
    ```
</details>
<details>
<summary>Persons</summary>



</details>
<details>
<summary>Access</summary>



</details>
<details>
<summary>Room</summary>



</details>
<details>
<summary>Access history</summary>



</details>
<details>
<summary>Administration</summary>



</details>





## Future functionalities⏭️
- Internal social network or chat for networking
- Advanced access control with facial or fingerprint recognition
- ...


## Development👨🏻‍💻

```js
const developer = "DavidFernandez";

console.log("Developed by: " DavidFernandez);
```

## Appreciations💯

I would like to dedicate my thanks to the teachers at Geeks Hubs as well as my day to day peers with whom we can help each other with our problems.


## Contact📲
- **David Fernandez Valle**
  - [GitHub](https://github.com/Davfernandezz)
  - [Linkedin](https://www.linkedin.com/in/david-fern%C3%A1ndez-valle-1b4461300/?originalSubdomain=es)
