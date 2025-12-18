# SPFx Heft Webpack Patches

## HMR

### Issue

Hot Reload is enabled in heft out of the box, but HMR with preserved state does not get applied.

We can manually accept the hot reload updates, but this does not preserve state as the component needs to be remounted.

### Fix

To work around this, we can take advantage of heft’s build chain rigging and add a patch file that extends
the webpack config that is produced internally.

1. Install the refresh dependency

    ```shell
    npm i -D @pmmmwh/react-refresh-webpack-plugin
    ```

2. Add a webpack-patch.json file to the ./config folder
3. Add the enable-hmr.js patch file to the ./config/webpack-patches folder
4. Run the app

### Result

We should now see the enabled log on build, and any changes should be immediately applied and state preserved.

