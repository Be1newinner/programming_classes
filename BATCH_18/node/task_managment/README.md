# Task Management Backend

1. ADD NEW TASK
   [POST] /task
   input `BODY`

   {
   title: String,
   description: String,
   assigned_by: String,
   assigned_to: String,
   is_completed: Boolean,
   to_be_completed_by: Date
   }

   RESPONSE:
   {
   status: 200,
   message: "TASK CREATED SUCCESSFULLY"
   }

2. GET DETAIL OF TASK by ID
   [GET] /task/:id

   RESPONSE:
   {
   id: String,
   title: String,
   description: String,
   assigned_by: String,
   assigned_to: String,
   is_completed: Boolean,
   to_be_completed_by: Date
   }
