const { exec } = require("child_process");

const proxyConfigArg = process.argv.find((a) => a.startsWith("--proxy-config="));

if (proxyConfigArg) {
  const proxyConfig = proxyConfigArg.split(/=(.+)/)[1];

  exec(`AG_PROXY_CONFIG=${proxyConfig} npm run ag`, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}
