#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import {BlueGreenUsingEcsStack} from "../lib/blue-green-using-ecs-stack";

const app = new cdk.App();
new BlueGreenUsingEcsStack(app, 'BlueGreenUsingEcsStack');
