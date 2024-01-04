# reproducer_view_text_size

![Build](https://github.com/zglapa/reproducer_view_text_size/workflows/Pre%20Merge%20Checks/badge.svg)

This is a minimal repro example that shows a bug, where when a `Text` is placed inside a `View` with the `height` attribute set to the certain value (the same in both components) the `Text` will render 1px bigger, causing the border to be clipped at the bottom.

## Reproducer todo list

- [x] Create a new reproducer project.
- [x] Git clone your repository locally.
- [x] Edit the project to reproduce the failure you're seeing.
- [x] Push your changes, so that Github Actions can run the CI.
- [x] Make sure the repository is public and share the link with the issue you reported.
