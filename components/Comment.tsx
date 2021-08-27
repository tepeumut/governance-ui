import moment from 'moment'
import React from 'react'
import { VoteRecord } from '../models/accounts'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/solid'
import { ChatMessage } from '../models/chat/accounts'

const Comment = ({
  chatMessage,
  voteRecord,
}: {
  chatMessage: ChatMessage
  voteRecord: VoteRecord | undefined
}) => {
  const { author, postedAt, body } = chatMessage
  return (
    <div className="border-b border-bkg-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="bg-bkg-3 h-10 rounded-full w-10" />
          <div className="ml-3">
            <div className="font-bold pb-0.5 text-fgd-1">
              {author.toBase58()}
            </div>
            <div className="text-fgd-3 text-xs">
              {moment.unix(postedAt.toNumber()).fromNow()}
            </div>
          </div>
        </div>
        {voteRecord && (
          <div className="bg-bkg-3 flex items-center px-4 py-2 rounded-full">
            <div className="flex items-center pr-2 text-fgd-1 text-xs">
              {voteRecord.isYes() ? (
                <CheckCircleIcon className="h-5 mr-1 text-green w-5" />
              ) : (
                <XCircleIcon className="h-5 mr-1 text-red w-5" />
              )}
              {voteRecord.isYes() ? 'Approve' : 'Deny'}
            </div>
            <span className="text-fgd-4">|</span>
            <span className="pl-2 text-xs">
              {voteRecord.getVoteWeight().toLocaleString()} MNGO
            </span>
          </div>
        )}
      </div>
      <p>{body.value}</p>
    </div>
  )
}

export default Comment