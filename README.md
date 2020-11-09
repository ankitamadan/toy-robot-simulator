# Toy Robot Simulator

### Code Design

Written in **Typescript**.

#### Actions & Handlers

Actions are defined as types **Place**, **Move**, **Left**, **Right**, **Report**.

#### Directions

Directions are defined as types **North**, **South**, **West**, **East**.

### Run eslint

`npm run lint`

### Fix lint errors

`npm run format`

### How to Run 

```
yarn
yarn start
```

`
Run with scenario 
PLACE 0,0,NORTH
MOVE
REPORT
`


```
 _____                     ____            _               _       ____    _                       _           _
 |_   _|   ___    _   _    |  _ \    ___   | |__     ___   | |_    / ___|  (_)  _ __ ___    _   _  | |   __ _  | |_    ___    _ __
   | |    / _ \  | | | |   | |_) |  / _ \  | '_ \   / _ \  | __|   \___ \  | | | '_ ` _ \  | | | | | |  / _` | | __|  / _ \  | '__|
   | |   | (_) | | |_| |   |  _ <  | (_) | | |_) | | (_) | | |_     ___) | | | | | | | | | | |_| | | | | (_| | | |_  | (_) | | |
   |_|    \___/   \__, |   |_| \_\  \___/  |_.__/   \___/   \__|   |____/  |_| |_| |_| |_|  \__,_| |_|  \__,_|  \__|  \___/  |_|
                  |___/

Each command needs to be separated into a new line:
Type "REPORT" to see the current coordinate of your robot

Start typing your commands below:

? Please enter the command to place the robot>>. eg.: PLACE 0,0,NORTH: PLACE 0,0,NORTH
? Please enter the command to move or report the robot>>. eg.: REPORT, MOVE: MOVE
? Please enter the command to move or report the robot>>. eg.: REPORT, MOVE: REPORT

SUCCESS: Output: 0,1,NORTH

```

`
Run with invalid command
PLACE 0,0,NORTH
MOVEERTYFHH
REPORT
`

```
  _____                     ____            _               _       ____    _                       _           _
 |_   _|   ___    _   _    |  _ \    ___   | |__     ___   | |_    / ___|  (_)  _ __ ___    _   _  | |   __ _  | |_    ___    _ __
   | |    / _ \  | | | |   | |_) |  / _ \  | '_ \   / _ \  | __|   \___ \  | | | '_ ` _ \  | | | | | |  / _` | | __|  / _ \  | '__|
   | |   | (_) | | |_| |   |  _ <  | (_) | | |_) | | (_) | | |_     ___) | | | | | | | | | | |_| | | | | (_| | | |_  | (_) | | |
   |_|    \___/   \__, |   |_| \_\  \___/  |_.__/   \___/   \__|   |____/  |_| |_| |_| |_|  \__,_| |_|  \__,_|  \__|  \___/  |_|
                  |___/

Each command needs to be separated into a new line:
Type "REPORT" to see the current coordinate of your robot

Start typing your commands below:

? Please enter the command to place the robot>>. eg.: PLACE 0,0,NORTH: PLACE 0,0,NORTH
? Please enter the command to move or report the robot>>. eg.: REPORT, MOVE: MOVEERTYFHH
? Please enter the command to move or report the robot>>. eg.: REPORT, MOVE: REPORT
ERROR: Error: Invalid Command: MOVEERTYFHH
✨  Done in 12.60s.
```

### How to run tests

`yarn test`

```
 PASS  src/robot/robot.spec.ts
 PASS  src/robot/handlers/report/report.spec.ts
 PASS  src/utils/parseAction.spec.ts
 PASS  src/table/table.spec.ts
 PASS  src/robot/handlers/place/place.spec.ts
 PASS  src/robot/handlers/right/right.spec.ts
 PASS  src/directions/directions.spec.ts
 PASS  src/robot/handlers/left/left.spec.ts
 PASS  src/utils/parseDirection.spec.ts
 PASS  src/robot/handlers/move/move.spec.ts
-----------------------|---------|----------|---------|---------|-------------------
File                   | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------------------|---------|----------|---------|---------|-------------------
All files              |    95.1 |      100 |   85.71 |   94.51 |
 directions            |     100 |      100 |     100 |     100 |
  directions.ts        |     100 |      100 |     100 |     100 |
 robot                 |     100 |      100 |     100 |     100 |
  robot.ts             |     100 |      100 |     100 |     100 |
 robot/handlers        |     100 |      100 |     100 |     100 |
  index.ts             |     100 |      100 |     100 |     100 |
 robot/handlers/left   |     100 |      100 |     100 |     100 |
  left.ts              |     100 |      100 |     100 |     100 |
 robot/handlers/move   |     100 |      100 |     100 |     100 |
  move.ts              |     100 |      100 |     100 |     100 |
 robot/handlers/place  |     100 |      100 |     100 |     100 |
  place.ts             |     100 |      100 |     100 |     100 |
 robot/handlers/report |     100 |      100 |     100 |     100 |
  report.ts            |     100 |      100 |     100 |     100 |
 robot/handlers/right  |     100 |      100 |     100 |     100 |
  right.ts             |     100 |      100 |     100 |     100 |
 table                 |     100 |      100 |     100 |     100 |
  table.ts             |     100 |      100 |     100 |     100 |
 utils                 |   85.71 |      100 |      50 |   85.71 |
  console_message.ts   |     100 |      100 |     100 |     100 |
  index.ts             |   58.33 |      100 |       0 |   58.33 | 9-11,15,19
  parseAction.ts       |     100 |      100 |     100 |     100 |
  parseDirection.ts    |     100 |      100 |     100 |     100 |
-----------------------|---------|----------|---------|---------|-------------------

Test Suites: 10 passed, 10 total
Tests:       48 passed, 48 total
Snapshots:   0 total
Time:        3.324s
```
