# whatscode.db
Just some json database.

### Instalation

```bash
npm i whatscode.db
```

### Example

```js
const data = require('whatscode.db');

/* 
- if you want to use custom db path (default path to be "./db.json")

-if your custom db file is in directory like this example in "databases", you must create the directory first 
*/
data.init("./databases/somedb.json")

// set
data.set("name", "value") // { name: "value" }
data.set("another", "val") // { name: "value", another: "val" }

// get
data.get("name") // value
data.get("another") // val

// delete
data.delete("another") // { name: "value" }

// has
data.has("name") // true
data.has("another") // false

// all
data.all() // { name: "value" }
```