import { NodePath } from '@babel/traverse';
import * as assert from 'assert/strict';

function test(path: NodePath): void {
  assert.ok(path.isStatement());
}
