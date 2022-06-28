#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { userName } from '../src/games/cli.js';

console.log('Welcome to the Brain Games!');
userName();
