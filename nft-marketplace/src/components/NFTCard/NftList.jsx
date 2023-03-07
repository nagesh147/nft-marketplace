import React from 'react'
import PropTypes from 'prop-types'
import NftCard from './NftCard'
import nftsData from '../../data/nfts'
import '../../styles/NftList.css'

function NftList() {
  return (
    <div className="nft-list">
      {nftsData.map((nft) => (
        <NftCard key={nft.id} nft={nft} />
      ))}
    </div>
  )
}

NftList.propTypes = {
  nfts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
      purchaseUrl: PropTypes.string.isRequired,
    })
  ),
}

export default NftList
