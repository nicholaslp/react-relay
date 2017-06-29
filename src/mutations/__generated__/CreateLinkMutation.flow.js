/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule CreateLinkMutation.flow
 * @generated SignedSource<<13dde25d7f827369b3800f8a84a50357>>
 * @flow
 */

'use strict';

export type CreateLinkInput = {
  description?: ?string;
  url?: ?string;
  postedById?: ?string;
  votesIds?: ?string;
  votes?: ?Array<CreateLinkInput_votes>;
};

export type CreateLinkInput_votes = {
  userId?: ?string;
};

export type CreateLinkMutationResponse = {
  link?: ?CreateLinkMutationResponse_link;
};

export type CreateLinkMutationResponse_link_postedBy = {
  id: string;
  name: string;
};

export type CreateLinkMutationResponse_link = {
  id: string;
  createdAt: any;
  url: string;
  description: string;
  postedBy?: ?CreateLinkMutationResponse_link_postedBy;
};
