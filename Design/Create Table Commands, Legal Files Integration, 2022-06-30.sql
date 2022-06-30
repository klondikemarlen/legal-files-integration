IF OBJECT_ID('[submissions]',
'U') IS NULL CREATE TABLE [submissions] ([id] INTEGER NOT NULL IDENTITY(1,
1) ,
[raw_submission] NVARCHAR(MAX) NOT NULL,
[created_at] DATETIMEOFFSET NOT NULL,
[updated_at] DATETIMEOFFSET NOT NULL,
PRIMARY KEY ([id]));


IF OBJECT_ID('[rental_and_tenancy_dispute_submissions]',
'U') IS NULL CREATE TABLE [rental_and_tenancy_dispute_submissions] ([id] INTEGER NOT NULL IDENTITY(1,
1) ,
[submission_id] INTEGER NOT NULL,
[form_identifier] NVARCHAR(255) NOT NULL,
[first_name] NVARCHAR(255) NOT NULL,
[last_name] NVARCHAR(255) NOT NULL,
[email] NVARCHAR(255) NULL,
[phone] NVARCHAR(255) NULL,
[date_of_birth] DATE NULL,
[application_type] NVARCHAR(255) NULL,
[details_of_dispute] NVARCHAR(MAX) NULL,
[has_accepted_policy] BIT DEFAULT 0,
[created_at] DATETIMEOFFSET NOT NULL,
[updated_at] DATETIMEOFFSET NOT NULL,
PRIMARY KEY ([id]),
FOREIGN KEY ([submission_id]) REFERENCES [submissions] ([id]));


IF OBJECT_ID('[rental_and_tenancy_dispute_type_options]',
'U') IS NULL CREATE TABLE [rental_and_tenancy_dispute_type_options] ([id] INTEGER NOT NULL IDENTITY(1,
1) ,
[value] INTEGER NOT NULL,
[text] NVARCHAR(255) NOT NULL,
[created_at] DATETIMEOFFSET NOT NULL,
[updated_at] DATETIMEOFFSET NOT NULL,
PRIMARY KEY ([id]));


IF OBJECT_ID('[rental_and_tenancy_dispute_types]',
'U') IS NULL CREATE TABLE [rental_and_tenancy_dispute_types] ([id] INTEGER NOT NULL IDENTITY(1,
1) ,
[rental_and_tenancy_dispute_submission_id] INTEGER NOT NULL,
[rental_and_tenancy_dispute_type_option_id] INTEGER NOT NULL,
[created_at] DATETIMEOFFSET NOT NULL,
[updated_at] DATETIMEOFFSET NOT NULL,
PRIMARY KEY ([id]),
FOREIGN KEY ([rental_and_tenancy_dispute_submission_id]) REFERENCES [rental_and_tenancy_dispute_submissions] ([id]),
FOREIGN KEY ([rental_and_tenancy_dispute_type_option_id]) REFERENCES [rental_and_tenancy_dispute_type_options] ([id]));
