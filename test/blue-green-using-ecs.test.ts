import {SynthUtils} from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import cfnStack = require('../lib/blue-green-using-ecs-stack');

test('Assumable role created in OrgMaster', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new cfnStack.BlueGreenUsingEcsStack(app, 'BlueGreenStep1Stack')
    // THEN
    expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});
