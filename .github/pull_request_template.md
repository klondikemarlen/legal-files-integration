Fixes
[#XXX](https://github.com/klondikemarlen/legal-files-integration/issues/XXX)

# User Story

As a user, I can post from my drupal webform to the form-b endpoint, and it will
transform my data into a format that LegalFiles understands. The data will then
be transmitted to LegalFiles for storage.

# Implementation Details

- Added a new endpoint "/api/form-b".
- Added a FormBTransformerService to convert the form-b data to a format that
  LegalFiles understands.
- Added some tests for the new transformer service.

# Screenshots

![image](https://user-images.githubusercontent.com/XXXXXXXXXXXXXX.png)

# Testing Instructions

1. Boot the app via `dev boot`.
2. Post example data to the `/api/form-b` endpoint.

```bash
curl --request POST localhost:3000/api/form-b \
  --header "Content-Type: application/json" \
  --data '
{
  "name": "linuxize",
  "email": "linuxize@example.com"
}
'
```

3. Check that the returned data is correct. It should look like:

```
{
	"name": "linuxize",
	"email": "linuxize@example.com"
}
```
