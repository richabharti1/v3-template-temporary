# V3-extension-react-template

## Installing and Running

### Development:

1. Check if your [Node.js](https://nodejs.org/) version is >= **14**.
2. Run `npm install` to install the dependencies.
3. Run `npm start`
4. Load your extension on Chrome following:
    1. Access `chrome://extensions/`
    2. Check `Developer mode`
    3. Click on `Load unpacked extension`
    4. Select the `build` folder.

### Production build:

1. Stop development script (if it is running)
2. Remove installed dev. extension at `chrome://extensions/`
3. Run `npm run build`
4. Load your extension on Chrome following:
    1. Access `chrome://extensions/`
    2. Check `Developer mode`
    3. Click on `Load unpacked extension`
    4. Select the `build` folder

### Release:

We are using [release-it](https://github.com/release-it/release-it)

1. Generate `personal access token` in github following the steps:
    1. Go to Github->Settings->DeveloperSettings->PersonalAccessTokens
       - [link](https://github.com/settings/tokens/new?scopes=repo&description=release-it)
    2. For title, enter note as `release-it`
    3. For scopes, select only `repo`
    4. Click `Generate token`

2. Create `.env` file inside git repo and copy paste the generated `personal access token` in `GITHUB_TOKEN` variable
    ```
    GITHUB_TOKEN="f941e0..."
    ```

3. Optional. Generate `SSH key`. Following are the steps:
    1. Open `Git Bash` and `Run as administrator`
    2. Write the command `ssh-keygen` and generate the key without password.
    3. Go to `.ssh` folder in your computer and copy the contents of `id_rsa.pub` file.
    4. Go to `SSH and GPG keys` in github -  [link](https://github.com/settings/keys)
    5. Press `New SSH key` and paste the contents of `id_rsa.pub` file.
    6. Press `Add SSH key`

4. Optional. Ensure the git origin is using `ssh` and not `https`. Following are the steps
    1. Verify current git remote URL source:
        ```
        git remote -v
        ```
    2. If using https, obtain github ssh url from github repository.
    3. Below steps to replace the origin URL:
        ```
        git remote remove origin
        git remote set-url origin <new git url>
        ```
5. Generate release. Steps are:
    1. In the project directory write the command
        ```
        npm run release
        ```
    2. It will ask details including below:
        ```
        ? Select increment (next version): [path, minor or major]
        ? Commit (Release x.y.z)? [Yes/No]
        ? Tag (vx.y.z)? [Yes/No]
        ? Push? [Yes/No]
        ? Create a release on GitHub (Release x.y.z)? [Yes/No]
        ```
    3. As part of the release process, a zip file named `dist.zip` is additionally uploaded.

### Note

We are using
modified [chrome-extension-boilerplate-react](https://github.com/lxieyang/chrome-extension-boilerplate-react).

To avoid conflict in values across manifest.json and package.json:

- Description is always used from manifest.json
- Version number is used as per package.json [so that extension and release version are in sync]


