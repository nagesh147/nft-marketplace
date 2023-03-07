import React from 'react'
import PropTypes from 'prop-types'
import NftCard from './NftCard'
import NftModal from './NftModal'
import '../../styles/NftList.css'

function NftList({ nfts }) {
  const [selectedNft, setSelectedNft] = React.useState(null)

  const handleNftClick = (nft) => {
    setSelectedNft(nft)
  }

  const handleModalClose = () => {
    setSelectedNft(null)
  }

  return (
    <>
      <div className="nft-list">
        {nfts.map((nft) => (
          <NftCard key={nft.id} nft={nft} onClick={() => handleNftClick(nft)} />
        ))}
      </div>
      {selectedNft && <NftModal nft={selectedNft} onClose={handleModalClose} />}
    </>
  )
}

NftList.propTypes = {
  nfts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      owner: PropTypes.shape({
        name: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
      }),
      description: PropTypes.string.isRequired,
      purchaseUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default NftList
