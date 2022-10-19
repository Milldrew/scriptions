<h3>Install</h3>

```
npm i -D @andrew_miller/scriptions
or
yarn add -D @andrew_miller/scriptions
```

<h3>Describe your package.json scripts:</h3>
<p>
Add your package.json scripts and then describe them on the scriptions property.
package.json
</p>

```
{
  "name": "name",
  "scripts": {
    "foo": "echo foo",
    "bar": "echo bar"
  },
  "scriptions": {
    "foo": "prints foo to the standard out stream",
    "bar": "prints bar to the standard out stream"
  },
  "dependencies": {
    "inquirer": "^9.1.2"
  }
}

```

<h3>Quick Start</h3>

```
npx scriptions
? FILE: /Users/andrewmiller/projects/scriptions/package.json:
 Choose the script you want to execute:
  1) Script: echo foo Scription: prints foo to the standard out stream Name: foo
  2) Script: echo bar Scription: prints bar to the standard out stream Name: bar
  Answer:

```

```
Answer: 1
```

```
echo foo
foo
```
