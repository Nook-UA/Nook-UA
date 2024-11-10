
## Scheduale

| Start | End |
| :--: | :--: |
| 2024/10/104 | 2024/10/28 |

## Roles

| Scrum Master | Product Owner | Developers |
| :--: | :--: | :--: |
| Daniel Madureira | Tomás Victal | João Andrade <br /> José Gameiro <br /> Rafael Ferreira |

## Goal

- Authentication with AWS
- Start LLM to see parking occupation
- Configure DB
- Automate workflows with Terraform scripts
- Actions to run tests in automatically
- Complete user stories related to authentication (1 and 2)
- Start the implementation of user story 4 (<ins>Obtain Parking Spots through video</ins>)
- Start the implementation of user story 3 (<ins>Add a new park</ins>)

## What was made

- Authentication with AWS Cognito finished with success and tested locally
- Authentication with Google for mobile application with success and tested locally
- Database diagram designed with success
- Developed some tests for for add a new park feauture in backend
- Started the development of the microservice to detect the parking occupation using an LLM
- Created some unit tests for the user story 4
- Created a action in the rest api repository

## Review

| Completed | Quantity |
| :--: | :--: |
| Tasks | 5 |
| Story Points | 16 |

## Retrospective

The user stories for authentication where tested locally, because it didn't exist time to develop unit and functional tests. 
There were some problems with the execution of the unit tests for the add a new park feauture in the REST API were the database configured for the tests was not done correctly, it was supposed to be a SQLite, but for some reason, when executing the tests for the repositories, with would try to connect to a PostgreSQL database. The action for CI/CD pipeline was created with success however because of the database configuration problem, this action would never run with success. It wasn't possible to configure some Terraform scripts do to lack of time, and the architecture for the deployment in AWS was also not possible to complete.

## Burndown chart

![Sprint 2 Burndown chart](/img/Sprint2_burndown.png)