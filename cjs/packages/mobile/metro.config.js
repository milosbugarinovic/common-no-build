const path = require('path');
// const exclusionList = require('metro-config/src/defaults/exclusionList');

// const moduleRoot = path.resolve(__dirname, '../..');

const projectRoot = __dirname;
const commonRoot = path.resolve(projectRoot, '../common');
console.log('#######################', {commonRoot, __dirname, '#common': path.resolve(commonRoot, 'src')}) // eslint-disable-line no-console

module.exports = {
  watchFolders: [projectRoot, commonRoot],
  resolver: {
    extraNodeModules: new Proxy({
      '@test/common': commonRoot,
    },
        {
          get: (target, name) => {
            // console.log('$$$$$$$$$$$$$$',{name, target}) // eslint-disable-line no-console
            if (target.hasOwnProperty(name)) {
              return target[name]
            }
            return path.join(process.cwd(), `node_modules/${name}`)
          },
        },),
  },
};