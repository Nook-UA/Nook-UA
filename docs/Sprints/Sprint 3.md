
## Schedule

| Start | End |
| :--: | :--: |
| 2024/10/28 | 2024/11/10 |

## Roles

| Scrum Master | Product Owner | Developers |
| :--: | :--: | :--: |
| Tomás Victal | João Andrade | José Gameiro <br /> Daniel Madureira |

## Goal

- Configure database for testing in the rest api repository
- Allow a client to configure the parking spots
- Implement see parking spots for a client
- Implement add a new park for a client
- Implement see close parking spots in the mobile app
- Finish the implementation for the detect parking spots microservice

## Retrospective

We conclude that our previous top-down approach (each user story is fully developed by one assignee - including backend, frontend and testing) to user stories. We also concluded that hotfix branches needing 2 reviewers to be approved seems excessive for the changes incoming from what we expect to be a hotfix.

Keeping that in mind, we will try to fix these issues on the next sprint, implementing some measures to address the upper issues:
-  We'll break down each user story to its core subtasks and assign each subtask to a team member (instead of one team member doing it all)
-  We'll configure branch protection rules to include Hotfix specifications, so it only requires a reviewer (instead of two)

### What was made

- The database for the tests was configured with success and tests are passing
- Client configure parking spots
- Backend for see parking spots implemented
- Add a new park developed
- Detect parking spots microservice finished



## Review

| Completed | Quantity |
| :--: | :--: |
| Tasks | 2 |
| Story Points | 15 |

## Conclusion

The user story for add a new park is developed, however it's missing tests and peer review. The user story to see the close parking spots in the mobile app was not implemented do to lack of time, so it will be moved to the next sprint. Also, and for the same reason, we were unable to meet 3 times a week as we planned, instead we kept the one meeting per week. The user story to configure parking spots was fully implemented, however it lacks integration with the user story add park (client)

## Burndown chart

![Sprint 2 Burndown chart](/img/Sprint3_burndown.png)