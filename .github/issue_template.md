Core Design Document:
[Change Tracking and Approval Design](https://docs.google.com/document/d/XXXX)

# User Story

A drupal form B can be posted to service and the data appropriately mapped and
stored in LegalFiles.

# Requirements

- Must create a new `/api/form-b` endpoint.
- Must create a tranformer for the form B data before it is sent on to
  LegalFiles.

## Data Format

Data format from the Drupal form is JSON with fields XXX. Data format sent to
the LegalFiles database is JSON with fields XXXX.

# Tasks

- Create a new `/api/form-b` route and controller - max 4 hours.
- Build a FormBService to transform data with appropriate tests - max 1 day
- Add additional LegalFilesApi methods.

## Related issues

- https://github.com/klondikemarlen/legal-files-integraion/issues/XXX
