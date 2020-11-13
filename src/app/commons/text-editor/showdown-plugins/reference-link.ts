/**
 * Copyright (c) 2014-2020 Taiga Agile LLC
 *
 * This source code is licensed under the terms of the
 * GNU Affero General Public License found in the LICENSE file in
 * the root directory of this source tree.
 */

export default (projectSlug: string) => {
  const referenceToProject = {
    type:    'lang',
    regex: /(?<!^)#([\S]+)/gm,
    replace: (_match: string, tag: string) => {
        tag = tag.replace('&nbsp;', '');
        return `[#${tag}](/project/${projectSlug}/t/${tag})`;
    },
  };

  return [referenceToProject];
};
