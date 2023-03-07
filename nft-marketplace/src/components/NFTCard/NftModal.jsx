import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/NftModal.css'

function NftModal(props) {
  const { nft, onClose } = props

  return (
    <div className="nft-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img src={nft.image} alt={nft.name} />
        <div className="nft-details">
          <h3>{nft.name}</h3>
          <p>{nft.description}</p>
          <div className="nft-owner">
            <span>Owner: </span>
            <span>{nft.owner}</span>
          </div>
          <a href={nft.purchaseUrl} target="_blank" rel="noreferrer">
            <button className="buy-button">Buy on OpenSea</button>
          </a>
        </div>
      </div>
    </div>
  )
}

NftModal.propTypes = {
  nft: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    purchaseUrl: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
}

export default NftModal
