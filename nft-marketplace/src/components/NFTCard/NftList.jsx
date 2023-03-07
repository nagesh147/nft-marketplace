import React from 'react'
import PropTypes from 'prop-types'
import NftCard from './NftCard'
import '../../styles/NftList.css'

function NftList({ nfts }) {
  return (
    <div className="nft-list">
      {nfts.map((nft) => (
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
      image: PropTypes.string.isRequired,
      owner: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          address: PropTypes.string.isRequired,
          profileImage: PropTypes.string.isRequired,
        }),
      ]),
      description: PropTypes.string.isRequired,
      purchaseUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default NftList
