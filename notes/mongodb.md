# Ways to Call MongoDB Queries
- 1. Direct Queries
- 2. Aggregation Queries

# **1. Direct Queries = CRUD Operations:**

- **Create:**

  - `insertOne(document)`: Inserts a single document into a collection.
  - `insertMany(documents)`: Inserts multiple documents into a collection.

- **Read:**

  - `find(filter)`: Retrieves documents that match the specified filter.
  - `findOne(filter)`: Retrieves a single document that matches the filter.
  - `distinct(field, filter)`: Finds the distinct values for a specified field across a collection.

- **Update:**

  - `updateOne(filter, update, options)`: Updates a single document matching the filter.
  - `updateMany(filter, update, options)`: Updates multiple documents matching the filter.
  - `replaceOne(filter, replacement, options)`: Replaces a single document matching the filter with a new document.

- **Delete:**
  - `deleteOne(filter)`: Deletes a single document matching the filter.
  - `deleteMany(filter)`: Deletes multiple documents matching the filter.

**2. Query and Projection Operators:**

- **Comparison Operators:**

  - `$eq`: Matches values that are equal to a specified value.
  - `$gt`: Matches values that are greater than a specified value.
  - `$gte`: Matches values that are greater than or equal to a specified value.
  - `$lt`: Matches values that are less than a specified value.
  - `$lte`: Matches values that are less than or equal to a specified value.
  - `$ne`: Matches values that are not equal to a specified value.
  - `$in`: Matches any of the values specified in an array.
  - `$nin`: Matches none of the values specified in an array.

- **Logical Operators:**

  - `$and`: Joins query clauses with a logical AND.
  - `$or`: Joins query clauses with a logical OR.
  - `$not`: Inverts the effect of a query expression.
  - `$nor`: Joins query clauses with a logical NOR.

- **Element Operators:**

  - `$exists`: Matches documents that have the specified field.
  - `$type`: Selects documents if a field is of the specified type.

- **Evaluation Operators:**

  - `$expr`: Allows the use of aggregation expressions within the query language.
  - `$jsonSchema`: Validates documents against the given JSON Schema.
  - `$mod`: Performs a modulo operation on the value of a field and selects documents with a specified result.
  - `$regex`: Selects documents where values match a specified regular expression.
  - `$text`: Performs text search.
  - `$where`: Matches documents that satisfy a JavaScript expression.

- **Array Operators:**

  - `$all`: Matches arrays that contain all elements specified in the query.
  - `$elemMatch`: Selects documents if an element in the array field matches all the specified `$elemMatch` conditions.
  - `$size`: Selects documents if the array field is a specified size.

- **Projection Operators:**
  - `$`: Projects the first element in an array that matches the query condition.
  - `$elemMatch`: Projects the first element in an array that matches the specified `$elemMatch` condition.
  - `$meta`: Projects the metadata associated with a text search score.
  - `$slice`: Limits the number of elements projected from an array.

**3. Update Operators:**

- **Field Update Operators:**

  - `$set`: Sets the value of a field.
  - `$unset`: Removes the specified field from a document.
  - `$rename`: Renames a field.

- **Array Update Operators:**

  - `$push`: Adds an element to an array.
  - `$pop`: Removes the first or last element of an array.
  - `$pull`: Removes all array elements that match a specified condition.
  - `$addToSet`: Adds elements to an array only if they do not already exist.

- **Bitwise Update Operators:**
  - `$bit`: Performs bitwise AND, OR, and XOR operations.

# **Aggregation Pipelines**

## **1. Filtering and Matching Stages**

### **$match**
- **Description:**  
  Filters documents in the pipeline to only those that match the specified criteria. It’s analogous to a query’s WHERE clause.
- **When to Use:**  
  Use at the beginning of your pipeline to limit documents for later stages and improve performance.
- **Syntax:**  
  ```js
  { $match: { field: condition } }
  ```
- **Example:**
  ```js
  db.collection.aggregate([
    { $match: { status: "active", age: { $gte: 18 } } }
  ]);
  ```
  
---

## **2. Document Transformation Stages**

### **$project**
- **Description:**  
  Selects, includes, excludes, renames, or computes new fields. It reshapes each document.
- **When to Use:**  
  Use to limit output fields or to compute new fields for subsequent stages.
- **Syntax:**  
  ```js
  { $project: { field1: 1, field2: 1, computedField: { $add: ["$num1", "$num2"] } } }
  ```
- **Example:**
  ```js
  db.collection.aggregate([
    { $project: { _id: 0, name: 1, finalPrice: { $subtract: ["$price", "$discount"] } } }
  ]);
  ```

### **$addFields / $set**
- **Description:**  
  Adds new fields or overrides existing ones in each document.  
  (Note: `$set` is an alias for `$addFields`.)
- **When to Use:**  
  Use when you need to enrich documents with computed or static values without removing other fields.
- **Syntax:**  
  ```js
  { $addFields: { newField: "value", computedField: { $multiply: ["$quantity", "$price"] } } }
  ```
- **Example:**
  ```js
  db.collection.aggregate([
    {
      $addFields: {
        totalCost: { $multiply: ["$price", "$quantity"] },
        currency: "USD"
      }
    }
  ]);
  ```

### **$unset**
- **Description:**  
  Removes specified fields from documents.
- **When to Use:**  
  Use after transformations if you want to remove sensitive or unnecessary fields before sending data to clients.
- **Syntax:**  
  ```js
  { $unset: "fieldName" }
  ```
- **Example:**
  ```js
  db.collection.aggregate([
    { $unset: "temporaryField" }
  ]);
  ```

### **$replaceRoot / $replaceWith**
- **Description:**  
  Replaces the entire document with the specified document.  
  `$replaceWith` is the newer alias.
- **When to Use:**  
  Use to change the document’s root—often after joining data or when restructuring nested documents.
- **Syntax:**  
  ```js
  { $replaceWith: { newField: "$oldField", otherField: "$anotherField" } }
  ```
- **Example:**
  ```js
  db.collection.aggregate([
    { $replaceWith: { name: "$title", price: "$cost" } }
  ]);
  ```

---

## **3. Grouping and Aggregating Stages**

### **$group**
- **Description:**  
  Groups documents based on a key and performs aggregate computations (like sum, avg, etc.) for each group.
- **When to Use:**  
  Use when you need to summarize data—such as total sales per category or count per user.
- **Syntax:**  
  ```js
  {
    $group: {
      _id: "$groupField",
      total: { $sum: "$amount" },
      avgValue: { $avg: "$value" }
    }
  }
  ```
- **Example:**
  ```js
  db.sales.aggregate([
    {
      $group: {
        _id: "$productId",
        totalSales: { $sum: { $multiply: ["$price", "$quantity"] } },
        count: { $sum: 1 }
      }
    }
  ]);
  ```

### **$bucket**
- **Description:**  
  Divides documents into buckets based on specified boundaries (like histogram bins).
- **When to Use:**  
  Use when you want to categorize numeric data into ranges.
- **Syntax:**  
  ```js
  {
    $bucket: {
      groupBy: "$price",
      boundaries: [0, 100, 200, 300, 400],
      default: "Other",
      output: { count: { $sum: 1 } }
    }
  }
  ```
- **Example:**
  ```js
  db.products.aggregate([
    {
      $bucket: {
        groupBy: "$price",
        boundaries: [0, 100, 200, 300, 400],
        default: "Other",
        output: { count: { $sum: 1 }, avgPrice: { $avg: "$price" } }
      }
    }
  ]);
  ```

### **$bucketAuto**
- **Description:**  
  Automatically divides documents into a specified number of buckets with approximately equal counts.
- **When to Use:**  
  Use when you prefer the database to determine the optimal bucket boundaries.
- **Syntax:**  
  ```js
  {
    $bucketAuto: {
      groupBy: "$price",
      buckets: 4,
      output: { count: { $sum: 1 }, avgPrice: { $avg: "$price" } }
    }
  }
  ```
- **Example:**
  ```js
  db.products.aggregate([
    {
      $bucketAuto: {
        groupBy: "$price",
        buckets: 4,
        output: { count: { $sum: 1 }, avgPrice: { $avg: "$price" } }
      }
    }
  ]);
  ```

### **$sortByCount**
- **Description:**  
  Groups documents by a specified expression and then counts the number of documents in each group, sorting by count.
- **When to Use:**  
  Useful for quickly summarizing the frequency of occurrences.
- **Syntax:**  
  ```js
  { $sortByCount: "$field" }
  ```
- **Example:**
  ```js
  db.products.aggregate([
    { $sortByCount: "$category" }
  ]);
  ```

### **$count**
- **Description:**  
  Counts the number of documents that pass through the pipeline and outputs a document with the count.
- **When to Use:**  
  Use at the end of a pipeline when you simply need a document count.
- **Syntax:**  
  ```js
  { $count: "totalDocuments" }
  ```
- **Example:**
  ```js
  db.products.aggregate([
    { $match: { category: "Electronics" } },
    { $count: "numElectronics" }
  ]);
  ```

---

## **4. Data Ordering and Pagination Stages**

### **$sort**
- **Description:**  
  Sorts documents based on specified fields, either ascending (1) or descending (-1).
- **When to Use:**  
  Use after filtering/grouping to order your data.  
  Optimized if fields are indexed.
- **Syntax:**  
  ```js
  { $sort: { field1: 1, field2: -1 } }
  ```
- **Example:**
  ```js
  db.products.aggregate([
    { $sort: { price: -1, rating: 1 } }
  ]);
  ```

### **$limit**
- **Description:**  
  Restricts the pipeline to pass a specified number of documents.
- **When to Use:**  
  Use to control output size—for example, the top N results.
- **Syntax:**  
  ```js
  { $limit: <number> }
  ```
- **Example:**
  ```js
  db.products.aggregate([
    { $sort: { price: 1 } },
    { $limit: 5 }
  ]);
  ```

### **$skip**
- **Description:**  
  Skips over a specified number of documents (commonly used for pagination).
- **When to Use:**  
  Use in combination with `$limit` for paginated output.
- **Syntax:**  
  ```js
  { $skip: <number> }
  ```
- **Example:**
  ```js
  db.products.aggregate([
    { $sort: { price: 1 } },
    { $skip: 5 },
    { $limit: 5 }
  ]);
  ```

---

## **5. Array Processing Stages**

### **$unwind**
- **Description:**  
  Deconstructs an array field from the input document to output a document for each element.
- **When to Use:**  
  Use when you need to process or filter individual elements of an array.
- **Syntax:**  
  ```js
  { $unwind: "$arrayField" }
  ```
- **Example:**
  ```js
  db.products.aggregate([
    { $unwind: "$tags" },
    { $match: { tags: "portable" } }
  ]);
  ```

---

## **6. Data Combination and Join Stages**

### **$lookup**
- **Description:**  
  Performs a left outer join to another collection, adding the joined documents as an array.
- **When to Use:**  
  Use when you need to incorporate related data from different collections.
- **Syntax:**  
  ```js
  {
    $lookup: {
      from: "foreignCollection",
      localField: "fieldLocal",
      foreignField: "fieldForeign",
      as: "resultField"
    }
  }
  ```
- **Example:**
  ```js
  db.orders.aggregate([
    {
      $lookup: {
        from: "customers",
        localField: "customerId",
        foreignField: "_id",
        as: "customerDetails"
      }
    }
  ]);
  ```

### **$graphLookup**
- **Description:**  
  Performs recursive search on a collection; useful for hierarchical data.
- **When to Use:**  
  Use when you need to traverse relationships in documents (e.g., organizational charts, category trees).
- **Syntax:**  
  ```js
  {
    $graphLookup: {
      from: "collection",
      startWith: "$field",
      connectFromField: "field",
      connectToField: "field",
      as: "result"
    }
  }
  ```
- **Example:**
  ```js
  db.employees.aggregate([
    {
      $graphLookup: {
        from: "employees",
        startWith: "$managerId",
        connectFromField: "managerId",
        connectToField: "_id",
        as: "managementChain"
      }
    }
  ]);
  ```

### **$unionWith**
- **Description:**  
  Merges pipeline results from the current collection with those from another collection.
- **When to Use:**  
  Use when you need to combine data from multiple collections into one result set.
- **Syntax:**  
  ```js
  { $unionWith: "otherCollection" }
  ```
- **Example:**
  ```js
  db.orders.aggregate([
    { $match: { status: "pending" } },
    { $unionWith: "backorders" },
    { $match: { priority: "high" } }
  ]);
  ```

---

## **7. Parallel Pipeline and Sampling Stages**

### **$facet**
- **Description:**  
  Runs multiple aggregation pipelines in parallel on the same input and returns a document that combines the output of each pipeline.
- **When to Use:**  
  Use when you need to perform different aggregations on the same set of documents concurrently.
- **Syntax:**  
  ```js
  {
    $facet: {
      pipeline1: [ /* stages */ ],
      pipeline2: [ /* stages */ ]
    }
  }
  ```
- **Example:**
  ```js
  db.products.aggregate([
    {
      $facet: {
        byCategory: [
          { $group: { _id: "$category", count: { $sum: 1 } } },
          { $sort: { count: -1 } }
        ],
        priceStats: [
          { $group: { _id: null, avgPrice: { $avg: "$price" }, total: { $sum: 1 } } }
        ]
      }
    }
  ]);
  ```

### **$sample**
- **Description:**  
  Randomly selects the specified number of documents from the input.
- **When to Use:**  
  Use to generate random samples—for example, in A/B testing or random data previews.
- **Syntax:**  
  ```js
  { $sample: { size: <number> } }
  ```
- **Example:**
  ```js
  db.products.aggregate([
    { $sample: { size: 5 } }
  ]);
  ```

---

## **8. Advanced Analytics and Window Functions**

### **$setWindowFields**
- **Description:**  
  Introduces window functions (similar to SQL window functions) to compute values over a partition of documents.
- **When to Use:**  
  Use when you need cumulative sums, moving averages, or ranking over a sorted partition.
- **Syntax:**  
  ```js
  {
    $setWindowFields: {
      partitionBy: "$groupField",
      sortBy: { sortField: 1 },
      output: {
        runningTotal: {
          $sum: "$value",
          window: { documents: ["unbounded", "current"] }
        }
      }
    }
  }
  ```
- **Example:**
  ```js
  db.sales.aggregate([
    {
      $setWindowFields: {
        partitionBy: "$category",
        sortBy: { date: 1 },
        output: {
          runningTotal: {
            $sum: "$amount",
            window: { documents: ["unbounded", "current"] }
          }
        }
      }
    }
  ]);
  ```

---

## **9. Geospatial and Collection Statistics**

### **$geoNear**
- **Description:**  
  Performs a geospatial query, adding a calculated distance field. Must be the first stage.
- **When to Use:**  
  Use when querying documents by proximity to a point.
- **Syntax:**  
  ```js
  {
    $geoNear: {
      near: { type: "Point", coordinates: [ <longitude>, <latitude> ] },
      distanceField: "distance",
      maxDistance: <distance>,
      spherical: true
    }
  }
  ```
- **Example:**
  ```js
  db.places.aggregate([
    {
      $geoNear: {
        near: { type: "Point", coordinates: [ -73.99279, 40.719296 ] },
        distanceField: "distance",
        maxDistance: 1000,
        spherical: true
      }
    }
  ]);
  ```

### **$collStats**
- **Description:**  
  Retrieves statistics about the collection such as latency or document count distribution.
- **When to Use:**  
  Use for debugging or to monitor collection performance.
- **Syntax:**  
  ```js
  { $collStats: { latencyStats: { } } }
  ```
- **Example:**
  ```js
  db.products.aggregate([
    { $collStats: { latencyStats: { } } }
  ]);
  ```

### **$indexStats**
- **Description:**  
  Provides statistics about index usage on a collection.
- **When to Use:**  
  Use for monitoring index performance and diagnosing query issues.
- **Syntax:**  
  ```js
  { $indexStats: { } }
  ```
- **Example:**
  ```js
  db.products.aggregate([
    { $indexStats: { } }
  ]);
  ```

---

## **10. Security and Debugging**

### **$redact**
- **Description:**  
  Applies document-level access control by evaluating and conditionally including/excluding document sections.
- **When to Use:**  
  Use to enforce field-level security rules based on custom logic.
- **Syntax:**  
  ```js
  {
    $redact: {
      $cond: {
        if: { <expression> },
        then: "$$DESCEND",  // continue processing document
        else: "$$PRUNE"     // remove document
      }
    }
  }
  ```
- **Example:**
  ```js
  db.documents.aggregate([
    {
      $redact: {
        $cond: {
          if: { $eq: ["$classification", "public"] },
          then: "$$DESCEND",
          else: "$$PRUNE"
        }
      }
    }
  ]);
  ```

### **$planCacheStats**
- **Description:**  
  Provides information about the aggregation plan cache, useful for debugging or performance analysis.
- **When to Use:**  
  Rarely used in a production pipeline; generally for monitoring how aggregation plans are being reused.
- **Syntax:**  
  ```js
  { $planCacheStats: { } }
  ```
- **Example:**
  ```js
  db.products.aggregate([
    { $planCacheStats: { } }
  ]);
  ```

---

## **11. Output Stages**

### **$merge**
- **Description:**  
  Writes the results of the aggregation pipeline into an existing collection, updating or inserting documents based on specified conditions.
- **When to Use:**  
  Use when you want the processed data to be persisted in a collection.
- **Syntax:**  
  ```js
  {
    $merge: {
      into: "targetCollection",
      on: "_id", // field(s) for matching
      whenMatched: "replace", // or "merge", "keepExisting", etc.
      whenNotMatched: "insert"
    }
  }
  ```
- **Example:**
  ```js
  db.sales.aggregate([
    { $group: { _id: "$productId", totalSales: { $sum: "$amount" } } },
    {
      $merge: {
        into: "salesSummary",
        on: "_id",
        whenMatched: "merge",
        whenNotMatched: "insert"
      }
    }
  ]);
  ```

### **$out**
- **Description:**  
  Writes the output of the aggregation pipeline to a new collection. This stage overwrites the collection if it already exists.
- **When to Use:**  
  Use when you need to persist an entire pipeline result as a new collection for reporting or further analysis.
- **Syntax:**  
  ```js
  { $out: "newCollectionName" }
  ```
- **Example:**
  ```js
  db.sales.aggregate([
    { $match: { status: "completed" } },
    { $group: { _id: "$productId", count: { $sum: 1 } } },
    { $out: "completedSales" }
  ]);
  ```

---

## **Summary Table**

| Stage                | Description                                                 | When to Use                                                     | Example (Node.js Syntax)                                              |
|----------------------|-------------------------------------------------------------|-----------------------------------------------------------------|----------------------------------------------------------------------|
| **$match**           | Filters documents                                           | Early stage filtering                                           | `{ $match: { status: "active" } }`                                     |
| **$project**         | Reshapes documents (include/exclude/compute fields)         | Controlling output fields                                       | `{ $project: { name: 1, price: 1 } }`                                   |
| **$addFields / $set** | Adds or overwrites fields                                   | Enriching documents                                             | `{ $addFields: { total: { $multiply: [ "$price", "$qty" ] } } }`        |
| **$unset**           | Removes fields                                              | Cleaning up output                                              | `{ $unset: "internalField" }`                                          |
| **$replaceWith**     | Replaces the whole document                                 | Re-rooting documents                                            | `{ $replaceWith: { newName: "$oldField" } }`                            |
| **$group**           | Groups documents and aggregates data                        | Summarizing data (e.g., totals, averages)                         | `{ $group: { _id: "$category", total: { $sum: "$price" } } }`           |
| **$bucket**          | Groups documents into user-defined ranges                   | Creating histograms                                             | `{ $bucket: { groupBy: "$price", boundaries: [0,100,200], default: "Other" } }` |
| **$bucketAuto**      | Automatically groups documents into buckets                 | When you prefer MongoDB to decide bucket boundaries               | `{ $bucketAuto: { groupBy: "$price", buckets: 4 } }`                     |
| **$sortByCount**     | Groups and counts occurrences, then sorts                   | Quick frequency analysis                                          | `{ $sortByCount: "$category" }`                                        |
| **$count**           | Counts documents                                            | When only total count is needed                                   | `{ $count: "totalDocs" }`                                              |
| **$sort**            | Orders documents                                            | Final sorting, pagination                                        | `{ $sort: { price: -1 } }`                                             |
| **$limit**           | Limits output documents                                     | Controlling output size                                           | `{ $limit: 10 }`                                                      |
| **$skip**            | Skips documents                                             | Pagination                                                       | `{ $skip: 20 }`                                                       |
| **$unwind**          | Deconstructs an array field into multiple documents         | When processing elements of an array individually                 | `{ $unwind: "$tags" }`                                                 |
| **$lookup**          | Joins data from another collection                          | Combining related documents from separate collections              | `{ $lookup: { from: "customers", localField: "cid", foreignField: "_id", as: "cust" } }` |
| **$graphLookup**     | Recursively searches documents                              | Hierarchical data (e.g., organizational trees)                     | `{ $graphLookup: { from: "employees", startWith: "$managerId", connectFromField: "managerId", connectToField: "_id", as: "chain" } }` |
| **$unionWith**       | Unions pipelines from two collections                        | Combining similar data from different collections                  | `{ $unionWith: "otherCollection" }`                                    |
| **$facet**           | Runs multiple pipelines in parallel                         | When multiple aggregations are needed in one query                    | `{ $facet: { stage1: [ ... ], stage2: [ ... ] } }`                      |
| **$sample**          | Returns a random sample of documents                         | Random sampling for A/B tests or previews                             | `{ $sample: { size: 5 } }`                                               |
| **$setWindowFields** | Applies window functions to compute cumulative or moving totals | Advanced analytics (e.g., running totals, ranks)                      | `{ $setWindowFields: { partitionBy: "$category", sortBy: { date: 1 }, output: { runningTotal: { $sum: "$amount", window: { documents: [ "unbounded", "current" ] } } } } }` |
| **$geoNear**         | Performs a geospatial query and calculates distances          | Location-based searches (must be first stage)                          | `{ $geoNear: { near: { type: "Point", coordinates: [ -73.99, 40.73 ] }, distanceField: "dist", spherical: true } }` |
| **$collStats**       | Outputs collection-level statistics                           | Monitoring and diagnostics                                           | `{ $collStats: { latencyStats: {} } }`                                  |
| **$indexStats**      | Outputs index usage statistics                                | Optimizing queries                                                   | `{ $indexStats: {} }`                                                  |
| **$redact**          | Enforces document-level access control                        | Security filtering based on content                                  | `{ $redact: { $cond: { if: { $eq: ["$classification", "public"] }, then: "$$DESCEND", else: "$$PRUNE" } } }` |
| **$planCacheStats**  | Returns stats on aggregation plan caches                      | Debugging performance issues                                         | `{ $planCacheStats: {} }`                                              |
| **$merge**           | Merges the results into an existing collection                | Persisting aggregation output (update/insert)                         | `{ $merge: { into: "target", on: "_id", whenMatched: "merge", whenNotMatched: "insert" } }` |
| **$out**             | Outputs the aggregation result to a new collection              | Persisting complete aggregation results as a new collection            | `{ $out: "newCollectionName" }`                                        |

---

## **Usage Conditions and Considerations**

- **Indexing:**  
  Use indexes with `$match` and `$sort` to optimize performance.

- **Pipeline Order:**  
  Place filtering (`$match`) early; transformation (`$project`, `$addFields`) and grouping (`$group`) come next. Output stages like `$merge` and `$out` should be at the end.

- **Memory & Performance:**  
  Stages like `$group` and `$facet` may require more memory; use them judiciously with large collections. Consider using `$sample` early if you only need a subset.

- **Transactional Changes:**  
  When outputting results with `$merge` or `$out`, ensure that concurrent writes or additional processing are managed carefully.

- **Security:**  
  `$redact` can help enforce document-level security. Use it when you need to filter out sensitive data based on custom rules.

---

# **5. Aggregation Operators:**

Below is a comprehensive list of aggregation **expression operators** available in MongoDB 8.0. These operators let you compute, compare, and transform data within aggregation pipelines. Many of these operators can also be used as part of update expressions (for example, in an update with an aggregation pipeline using `$set`) and within queries using the `$expr` operator—but note that standard queries (e.g. a plain `findOne`) do not support arbitrary aggregation expressions unless you use `$expr`.

Below you’ll find the major categories with their operators, a description of what they do, conditions or common use cases, syntax examples for use within aggregation pipelines, and comments on their use in contexts such as updates.

---

## **1. Arithmetic Operators**

These operators perform numerical calculations.

- **`$add`**  
  *Description:* Adds numbers, dates, or arrays (concatenating arrays).  
  *Use Cases:* Calculating totals, sums, or concatenating arrays.  
  *Syntax:*  
  ```js
  { $add: [ expression1, expression2, ... ] }
  ```
  *Example (Aggregation):*  
  ```js
  // Calculate final price
  db.sales.aggregate([
    { $project: { finalPrice: { $add: [ "$price", "$tax" ] } } }
  ]);
  ```  
  *Usage in Updates:*  
  Within an update pipeline you can use `$add` in a `$set` stage to compute new field values.

- **`$subtract`**  
  *Description:* Subtracts one value from another.  
  *Example:*  
  ```js
  { $subtract: [ "$price", "$discount" ] }
  ```

- **`$multiply`**  
  *Description:* Multiplies numbers.  
  *Example:*  
  ```js
  { $multiply: [ "$price", "$quantity" ] }
  ```

- **`$divide`**  
  *Description:* Divides one number by another.  
  *Example:*  
  ```js
  { $divide: [ "$total", "$count" ] }
  ```

- **`$mod`**  
  *Description:* Returns the remainder after dividing one number by another.  
  *Example:*  
  ```js
  { $mod: [ "$age", 5 ] }  // Useful for cyclic grouping (e.g. divisible by 5)
  ```

- **Other Math Operators:**  
  - **`$abs`**: Absolute value  
    ```js
    { $abs: "$value" }
    ```
  - **`$ceil`**: Rounds up  
    ```js
    { $ceil: "$value" }
    ```
  - **`$floor`**: Rounds down  
    ```js
    { $floor: "$value" }
    ```
  - **`$trunc`**: Truncates to an integer  
    ```js
    { $trunc: "$value" }
    ```

*Note:* These arithmetic operators work inside aggregation expressions (such as in `$project` or in an update pipeline with `$set`). They are not used directly in standard find queries unless wrapped in `$expr`.

---

## **2. Comparison Operators**

These operators compare values and return a Boolean result (or an integer in the case of `$cmp`).

- **`$eq`**  
  *Description:* Returns true if the values are equal.  
  *Example:*  
  ```js
  { $eq: [ "$field", 100 ] }
  ```

- **`$ne`**  
  *Description:* Returns true if values are not equal.  
  *Example:*  
  ```js
  { $ne: [ "$status", "inactive" ] }
  ```

- **`$gt`**, **`$gte`**, **`$lt`**, **`$lte`**  
  *Description:* Greater than, greater than or equal, less than, and less than or equal.  
  *Example:*  
  ```js
  { $gt: [ "$age", 18 ] }
  ```

- **`$cmp`**  
  *Description:* Compares two values and returns -1, 0, or 1.  
  *Example:*  
  ```js
  { $cmp: [ "$value1", "$value2" ] }
  ```

*Usage:* These are often used inside `$match` with `$expr` or within `$project` to create computed Boolean fields. They also work in update pipelines if you need conditional logic (combined with `$cond`).

---

## **3. Logical Operators**

Evaluate Boolean logic across expressions.

- **`$and`**  
  *Description:* Returns true if all expressions are true.  
  *Example:*  
  ```js
  { $and: [ { $gt: [ "$age", 18 ] }, { $lt: [ "$age", 65 ] } ] }
  ```

- **`$or`**  
  *Description:* Returns true if any expression is true.  
  *Example:*  
  ```js
  { $or: [ { $eq: [ "$status", "A" ] }, { $eq: [ "$status", "B" ] } ] }
  ```

- **`$not`**  
  *Description:* Inverts the result of an expression.  
  *Example:*  
  ```js
  { $not: { $eq: [ "$status", "inactive" ] } }
  ```

*Usage:* Logical operators are used within aggregation expressions and within `$expr` queries. They are not directly applied in update operators unless within an aggregation update.

---

## **4. Conditional Operators**

Provide if/then/else logic.

- **`$cond`**  
  *Description:* Ternary operator: evaluates a condition and returns one value if true and another if false.  
  *Syntax:*  
  ```js
  { $cond: { if: <boolean-expression>, then: <true-case>, else: <false-case> } }
  ```
  *Example:*  
  ```js
  {
    $project: {
      statusText: {
        $cond: { if: { $gte: [ "$score", 70 ] }, then: "Pass", else: "Fail" }
      }
    }
  }
  ```

- **`$ifNull`**  
  *Description:* Returns a specified value if the expression resolves to null.  
  *Example:*  
  ```js
  { $ifNull: [ "$field", "defaultValue" ] }
  ```

- **`$switch`**  
  *Description:* Evaluates a series of case expressions and returns the first matching result.  
  *Syntax:*  
  ```js
  {
    $switch: {
      branches: [
        { case: <expression1>, then: <result1> },
        { case: <expression2>, then: <result2> }
      ],
      default: <default-result>
    }
  }
  ```
  *Example:*  
  ```js
  {
    $project: {
      grade: {
        $switch: {
          branches: [
            { case: { $gte: [ "$score", 90 ] }, then: "A" },
            { case: { $gte: [ "$score", 80 ] }, then: "B" }
          ],
          default: "C"
        }
      }
    }
  }
  ```

*Usage:* These conditional operators are extensively used in `$project` stages to derive new fields. They can also be used inside update pipelines (using the aggregation pipeline form) and within `$expr` in find queries.

---

## **5. Array Operators**

Designed for processing array data.

- **`$arrayElemAt`**  
  *Description:* Returns the element at the specified array index.  
  *Example:*  
  ```js
  { $arrayElemAt: [ "$tags", 0 ] }
  ```

- **`$concatArrays`**  
  *Description:* Concatenates arrays.  
  *Example:*  
  ```js
  { $concatArrays: [ "$arr1", "$arr2" ] }
  ```

- **`$filter`**  
  *Description:* Selects a subset of an array to return based on a condition.  
  *Syntax:*  
  ```js
  {
    $filter: {
      input: "$array",
      as: "item",
      cond: { $gt: [ "$$item.score", 50 ] }
    }
  }
  ```
- **`$isArray`**  
  *Description:* Returns a Boolean indicating whether the argument is an array.  
  *Example:*  
  ```js
  { $isArray: "$tags" }
  ```

- **`$size`**  
  *Description:* Returns the size (i.e., the number of elements) of an array.  
  *Example:*  
  ```js
  { $size: "$arrayField" }
  ```

- **`$slice`**  
  *Description:* Returns a subset of an array.  
  *Example:*  
  ```js
  { $slice: [ "$arrayField", 0, 3 ] }
  ```

- **`$first`** and **`$last`**  
  *Description:* Return the first or last element of an array (used mainly within group accumulators).  
  *Example:*  
  ```js
  { $first: "$arrayField" }
  ```

- **`$indexOfArray`**  
  *Description:* Returns the index of a specified element in an array.  
  *Example:*  
  ```js
  { $indexOfArray: [ "$arrayField", "target" ] }
  ```

*Usage:* Array operators are used within `$project` or `$group` stages to transform or evaluate array fields. In update expressions (with aggregation pipelines), you can use these operators as well.

---

## **6. String Operators**

Operators to manipulate text strings.

- **`$concat`**  
  *Description:* Joins strings together.  
  *Example:*  
  ```js
  { $concat: [ "$firstName", " ", "$lastName" ] }
  ```

- **`$substr`** and **`$substrCP`**  
  *Description:* Returns a substring of a string; `$substrCP` counts code points properly.  
  *Example:*  
  ```js
  { $substr: [ "$field", 0, 5 ] }
  ```

- **`$toLower`** and **`$toUpper`**  
  *Description:* Converts a string to lowercase or uppercase.  
  *Example:*  
  ```js
  { $toLower: "$name" }
  ```

- **`$trim`**, **`$ltrim`**, **`$rtrim`**  
  *Description:* Removes whitespace or specified characters from the beginning and/or end of a string.  
  *Example:*  
  ```js
  { $trim: { input: "$text", chars: " " } }
  ```

- **`$strLenBytes`** and **`$strLenCP`**  
  *Description:* Returns the length of a string in bytes or in UTF-8 code points.  
  *Example:*  
  ```js
  { $strLenCP: "$text" }
  ```

- **`$split`**  
  *Description:* Splits a string into an array of substrings based on a delimiter.  
  *Example:*  
  ```js
  { $split: [ "$fullName", " " ] }
  ```

- **`$strcasecmp`**  
  *Description:* Performs a case-insensitive string comparison; returns 0 if equal.  
  *Example:*  
  ```js
  { $strcasecmp: [ "$name", "vijay" ] }
  ```

*Usage:* String operators are frequently used in `$project` stages to create new string fields or to clean up data. They can also be used in `$expr` for query matching or update computations.

---

## **7. Date Operators**

These operators allow you to format and manipulate date objects.

- **`$dateToString`**  
  *Description:* Converts a date to a string using a specified format.  
  *Example:*  
  ```js
  { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } }
  ```

- **`$dateFromString`**  
  *Description:* Parses a date string and returns a date object.  
  *Example:*  
  ```js
  { $dateFromString: { dateString: "$dateStr" } }
  ```

- **Individual Date Parts Operators:**  
  - **`$year`**, **`$month`**, **`$dayOfMonth`**, **`$dayOfWeek`**, **`$dayOfYear`**, **`$hour`**, **`$minute`**, **`$second`**, **`$millisecond`**  
    *Usage:* Extract the corresponding part of a date.  
    *Example:*  
    ```js
    { $year: "$createdAt" }
    ```

- **`$dateAdd`** and **`$dateSubtract`**  
  *Description:* Adds or subtracts a specified time interval to/from a date.  
  *Example:*  
  ```js
  { $dateAdd: { startDate: "$createdAt", unit: "day", amount: 5 } }
  ```

*Usage:* Date operators are essential in `$project` or `$group` stages for bucketing or formatting date information. They also work in update operations that use aggregation pipelines.

---

## **8. Set Operators**

Operate on arrays as mathematical sets.

- **`$setEquals`**  
  *Description:* Returns true if two arrays have the same set of elements (ignoring order).  
  *Example:*  
  ```js
  { $setEquals: [ "$array1", "$array2" ] }
  ```

- **`$setIntersection`**  
  *Description:* Returns an array of elements that appear in both input arrays.  
  *Example:*  
  ```js
  { $setIntersection: [ "$array1", "$array2" ] }
  ```

- **`$setUnion`**  
  *Description:* Returns an array that is the union of the input arrays, removing duplicates.  
  *Example:*  
  ```js
  { $setUnion: [ "$array1", "$array2" ] }
  ```

- **`$setDifference`**  
  *Description:* Returns an array with the elements from the first array that do not appear in the second.  
  *Example:*  
  ```js
  { $setDifference: [ "$array1", "$array2" ] }
  ```

- **`$setIsSubset`**  
  *Description:* Checks whether the first array is a subset of the second.
  *Example:*  
  ```js
  { $setIsSubset: [ "$array1", "$array2" ] }
  ```

*Usage:* Set operators are normally used within `$project` or `$group` stages to compare or combine arrays.

---

## **9. Object Operators**

Manipulate objects and convert between objects and arrays.

- **`$mergeObjects`**  
  *Description:* Merges multiple documents/objects into a single document.  
  *Example:*  
  ```js
  { $mergeObjects: [ "$obj1", "$obj2" ] }
  ```
  
- **`$objectToArray`**  
  *Description:* Converts a document (object) to an array of key-value pairs.  
  *Example:*  
  ```js
  { $objectToArray: "$document" }
  ```

- **`$arrayToObject`**  
  *Description:* Converts an array of key-value pairs back into a document.  
  *Example:*  
  ```js
  { $arrayToObject: "$kvPairs" }
  ```

*Usage:* Object operators are useful in transforming document shapes and are available in any aggregation stage that processes document expressions.

---

## **10. Miscellaneous Operators**

- **`$literal`**  
  *Description:* Returns the value without parsing it as an expression. Useful when you want to include a constant as part of your computation.  
  *Example:*  
  ```js
  { $literal: { key: "value" } }
  ```
  
- **`$map`**  
  *Description:* Applies an expression to each element in an array, returning a new array with the transformed elements.  
  *Syntax:*  
  ```js
  {
    $map: {
      input: "$arrayField",
      as: "item",
      in: { $multiply: [ "$$item", 2 ] }
    }
  }
  ```
  
- **`$function`**  
  *Description:* Allows the execution of a user-defined JavaScript function within an aggregation expression. Use with caution due to performance implications.  
  *Example:*  
  ```js
  {
    $function: {
      body: function(x) { return x * 2; },
      args: [ "$value" ],
      lang: "js"
    }
  }
  ```

*Usage:* Both `$literal` and `$map` are common in aggregation pipelines. `$function` is more advanced and generally used only when built-in operators cannot fulfill your logic.

---

## **Context of Use in Queries, Updates, and Aggregation Pipelines**

- **Aggregation Pipelines:**  
  These operators are designed primarily for use within aggregation stages such as `$project`, `$group`, and others. They are the building blocks to compute derived fields, filter data, or manipulate documents.

- **Update Queries with Aggregation Expressions:**  
  Since MongoDB 4.2, you can use aggregation expressions (including many of the above operators) in update statements. For example, using the update pipeline form with `$set`:
  ```js
  db.collection.updateOne(
    { _id: 1 },
    [{
      $set: { updatedScore: { $multiply: [ "$score", 1.1 ] } }
    }]
  );
  ```
  This update uses `$multiply` to compute a new field based on the current score.

- **Find Queries with `$expr`:**  
  Operators can be used in a query with `$expr` to compare fields or compute expressions:
  ```js
  db.collection.find({
    $expr: { $gt: [ "$score", 50 ] }
  });
  ```

- **Standard Queries (findOne, etc.):**  
  Without `$expr`, simple find queries do not evaluate aggregation expressions—they only match static values or use standard query operators (which are similar but not identical to aggregation operators).

---

## **Summary**

Below is a quick reference table (non-exhaustive) of major aggregation operators, their use, and context:

| **Category**   | **Operator**          | **Description**                                          | **Example**                                            | **Context**                            |
|----------------|-----------------------|----------------------------------------------------------|--------------------------------------------------------|----------------------------------------|
| Arithmetic     | `$add`                | Adds values                                              | `{ $add: [ "$a", "$b" ] }`                              | Aggregation, update expressions        |
|                | `$subtract`           | Subtracts values                                         | `{ $subtract: [ "$price", "$discount" ] }`             | Aggregation, update expressions        |
|                | `$multiply`           | Multiplies values                                        | `{ $multiply: [ "$price", "$quantity" ] }`             | Aggregation, update expressions        |
|                | `$divide`             | Divides values                                           | `{ $divide: [ "$total", "$count" ] }`                  | Aggregation, update expressions        |
|                | `$mod`                | Modulus operator                                         | `{ $mod: [ "$age", 5 ] }`                               | Aggregation, update expressions        |
| Comparison     | `$eq`, `$ne`, etc.    | Compare two values                                       | `{ $eq: [ "$field", 100 ] }`                           | Aggregation via `$expr`, `$project`    |
| Logical        | `$and`, `$or`, `$not`  | Logical conditions                                       | `{ $and: [ { $gt: [ "$age", 18 ] }, { $lt: [ "$age", 65 ] } ] }` | Aggregation, `$expr`                   |
| Conditional    | `$cond`               | Ternary condition                                        | `{ $cond: { if: { $gte: [ "$score", 70 ] }, then: "Pass", else: "Fail" } }` | Aggregation, update expressions        |
|                | `$ifNull`             | Returns default if value is null                         | `{ $ifNull: [ "$nickname", "Unknown" ] }`              | Aggregation, update expressions        |
|                | `$switch`             | Multi-case conditional                                   | `{ $switch: { branches: [...], default: "C" } }`       | Aggregation                            |
| Array          | `$arrayElemAt`        | Gets element at index                                    | `{ $arrayElemAt: [ "$tags", 0 ] }`                      | Aggregation, update expressions        |
|                | `$filter`             | Filters an array                                         | ```js { $filter: { input: "$arr", as: "item", cond: { $gt: [ "$$item", 10 ] } } } ``` | Aggregation                        |
|                | `$size`               | Returns the array length                                 | `{ $size: "$tags" }`                                   | Aggregation, update expressions        |
|                | `$concatArrays`       | Concatenates arrays                                      | `{ $concatArrays: [ "$arr1", "$arr2" ] }`              | Aggregation                            |
| String         | `$concat`             | Concatenates strings                                     | `{ $concat: [ "$firstName", " ", "$lastName" ] }`      | Aggregation, update expressions        |
|                | `$toLower` / `$toUpper`| Converts string case                                    | `{ $toLower: "$name" }`                                | Aggregation, update expressions        |
|                | `$trim`, `$ltrim`, `$rtrim` | Trims whitespace or characters                     | `{ $trim: { input: "$text", chars: " " } }`            | Aggregation                            |
|                | `$split`              | Splits a string into an array                            | `{ $split: [ "$fullName", " " ] }`                     | Aggregation                            |
| Date           | `$dateToString`       | Formats a date as a string                               | `{ $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } }` | Aggregation, update expressions        |
|                | `$year`, `$month`, …   | Extracts specific parts from a date                      | `{ $year: "$createdAt" }`                              | Aggregation                            |
| Set            | `$setUnion`           | Unions arrays, removing duplicates                     | `{ $setUnion: [ "$arr1", "$arr2" ] }`                  | Aggregation, update expressions        |
| Object         | `$mergeObjects`       | Merges multiple documents into one                       | `{ $mergeObjects: [ "$doc1", "$doc2" ] }`              | Aggregation, update expressions        |
| Miscellaneous  | `$literal`            | Returns the literal value (prevents evaluation)          | `{ $literal: { key: "value" } }`                       | Aggregation, update expressions        |
|                | `$map`                | Applies an expression to each element in an array         | `{ $map: { input: "$arr", as: "el", in: { $multiply: [ "$$el", 2 ] } } }` | Aggregation   |
|                | `$function`           | Runs a user-defined JavaScript function                   | `{ $function: { body: function(x) { return x * 2; }, args: [ "$value" ], lang: "js" } }` | Aggregation (advanced)         |

---

## **Final Remarks**

- **Where They Run:**  
  Most of these operators are designed for use within the aggregation framework (e.g., inside `$project`, `$group`, `$addFields`, or `$set` in update pipelines). With MongoDB’s support for aggregation in updates (since version 4.2), you can use many of these operators in update pipelines. Standard find queries (like `findOne`) don’t evaluate these expressions unless you wrap them inside `$expr`.

- **Conditions:**  
  Operators are applied to the fields of documents. They are subject to BSON data type rules, and many require that the field exists and is of a compatible type. Always consider indexing fields used in expressions if performance is critical.

- **Examples Provided:**  
  Each example above shows typical usage in the aggregation pipeline. You can run these examples in a Node.js environment with the MongoDB driver by wrapping them in an async function and calling `db.collection.aggregate([...]).toArray()`.