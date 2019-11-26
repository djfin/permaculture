module.exports = {
  name: 'permaculture-planner',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/permaculture-planner',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
