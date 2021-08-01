  
module.exports = (Plugin, Library) => {
    const {Patcher} = Library;
    return class QuickSave extends Plugin {

        onStart() {
            Patcher.before(Logger, "log", (t, a) => {
                a[0] = "Patched Message: " + a[0];
            });
        }

        onStop() {
            Patcher.unpatchAll();
        }
    };
};
