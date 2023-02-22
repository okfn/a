# a.okfn.org
[![Deploy to AWS S3](https://github.com/okfn/a/actions/workflows/deploy-s3.yml/badge.svg)](https://github.com/okfn/a/actions/workflows/deploy-s3.yml)

This is a repository only to be used for read-only web assets. This repository should be as light as possible.

When files are added here, GitHub actions automatically pushes them to the S3 bucket that serves https://a.okfn.org
A user with this specific permission was created: `a.okfn.org-github-action-to-deploy`
Never add a file directly onto master: always do a PR so someone else can verify the file belongs here.

What does belong here:

- images, css and html that is used across multiple OKI web properties

What does not belong here:

- Javascript libraries
- Presentations
- General documents
- Images for blog posts
