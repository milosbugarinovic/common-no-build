const path = require('path')

const projectRoot = __dirname;
const projectSrc = path.resolve(projectRoot, 'src');
const commonSrc = path.resolve(projectRoot, '../common/src');

module.exports = {
    watchFolders: [projectRoot, commonSrc],
    resolver: {
        extraNodeModules: new Proxy({
                '#common': commonSrc,
                '#': path.resolve(projectRoot, 'src'),
            },
            {
                get: (target, name) => {
                    if (target.hasOwnProperty(name)) return target[name]
                    return path.join(process.cwd(), `node_modules/${name}`)
                },
            },),
    },
};
