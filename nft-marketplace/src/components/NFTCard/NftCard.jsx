import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../../styles/NftCard.css'

function NftCard({ nft }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalOpen = () => {
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="nft-card" onClick={handleModalOpen}>
      <img className="nft-image" src={nft.image} alt={nft.name} />
      <div className="nft-details">
        <h2 className="nft-name">{nft.name}</h2>
        <p className="nft-owner">Owner: {nft.owner.name}</p>
      </div>
      {isModalOpen && (
        <div className="nft-modal">
          <div className="modal-content">
            <span className="close" onClick={handleModalClose}>
              &times;
            </span>
            <h2>{nft.name}</h2>
            <p>Owner: {nft.owner.name}</p>
            <p>Description: {nft.description}</p>
            <a
              className="purchase-button"
              href={nft.purchaseUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Purchase on OpenSea
            </a>
          </div>
        </div>
      )}
    </div>
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
