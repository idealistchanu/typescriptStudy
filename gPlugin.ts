class gPlugin {
    apply(compiler) {
        compiler.hooks.done.tap("Plugin", stats => {
            console.log("Plugin")
        })
    }
}

module.exports = gPlugin