---
description: Check if ports are occupied and manage running applications
---
1. Check if the port is occupied
   Run the following command to see if anything is running on port 3000 (or your target port):

   ```bash
   lsof -i :3000
   ```

2. Interpret the output
   - If the command returns **nothing** (exit code 1): The port is free. You can start your app.
   - If the command returns **a list of processes**: The port is occupied. The output will look like:

     ```
     COMMAND   PID USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
     node    12345 user   23u  IPv4 0x...      0t0  TCP *:3000 (LISTEN)
     ```

3. Kill the process (if needed)
   If you need to free up the port, use the PID from the previous step:

   ```bash
   kill -9 <PID>
   ```

   Or use this one-liner to kill whatever is on port 3000:

   ```bash
   npx kill-port 3000
   ```
