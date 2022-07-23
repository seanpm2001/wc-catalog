/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {suite} from 'uvu';
import * as assert from 'uvu/assert';
import {parseReferenceString} from '../../../lib/manifest/utils.js';

const test = suite('Custom element manifest utils tests');

test('parseReferenceString parses a scoped reference', () => {
  const ref = parseReferenceString('@foo/bar/baz.js#Qux');
  assert.equal(ref.package, '@foo/bar');
  assert.equal(ref.module, '/baz.js');
  assert.equal(ref.name, 'Qux');
});

test('parseReferenceString parses an unscoped reference', () => {
  const ref = parseReferenceString('foo/bar/baz.js#Qux');
  assert.equal(ref.package, 'foo');
  assert.equal(ref.module, '/bar/baz.js');
  assert.equal(ref.name, 'Qux');
});

test.run();
