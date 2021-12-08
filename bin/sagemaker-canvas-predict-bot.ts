#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { SageMakerCanvasPredictBotStack } from '../lib/sagemaker-canvas-predict-bot-stack';

const app = new cdk.App();
new SageMakerCanvasPredictBotStack(app, 'SageMakerCanvasPredictBotStack');
