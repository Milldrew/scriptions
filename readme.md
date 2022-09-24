<h1>Scriptions</h1>
<h2>User Story</h2>
<p>
The user will type in the command:
</p>

```
scriptions
```

<p>When the user types in this command a menu will appear for them to choose which script they want to run from the package.json file. </p>
<p>The user will be presented with a menu and each item on the menu will have a description that is provided by the scriptions key, the scriptions key will have an object whose keys will match the keys of your scripts, and the value will describe the respective script,  in the package.json vile</p>

package.json

```
{
  "name": "scriptions",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {"foo": "echo hello world" },
  "scriptions": {
    "foo": "this is an example description"
  }
}

```
