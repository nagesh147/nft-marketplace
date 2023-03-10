import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../../styles/NftCard.css'
import NftModal from './NftModal'

function NftCard({ nft }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalOpen = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <div className="nft-card">
        <img
          className="nft-image"
          src={nft.image}
          alt={nft.name}
          onClick={handleModalOpen}
        />
        <div className="nft-details">
          <h2 className="nft-name">{nft.name}</h2>
        </div>
        {isModalOpen && <NftModal nft={nft} onClose={handleCloseModal} />}
      </div>
    </>
  )
}

NftCard.propTypes = {
  nft: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    description: PropTypes.string.isRequired,
    purchaseUrl: PropTypes.string.isRequired,
  }).isRequired,
}

export default NftCard
