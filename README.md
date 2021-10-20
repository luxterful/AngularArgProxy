# NPM Argument Proxy

Repository to showcase argument bypass to angular via ENV variables.

Angular does not accept custom arguments through CLI parameters ala "npm run ag -- --custom-parameter=text". We can use another script which will translate CLI Parameters into ENV Variables. They will then be sent to the Angular CLI Tool ala "CUSTOM_PARAMETER=text npm run ag".

## how run this example

> npm run start -- --proxy-config=parameter1:foo,parameter2:bar
