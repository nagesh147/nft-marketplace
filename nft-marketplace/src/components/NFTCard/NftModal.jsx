import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/NftModal.css'

function NftModal(props) {
  const { nft, onClose } = props

  return (
    <div className="nft-modal">
      <div className="modal-content">
        <span className="nft-modal-close" onClick={onClose}>
          &times;
        </span>
        <h2>{nft.name}</h2>
        <p>Owner: {nft.owner.name}</p>
        <p>Address: {nft.owner.address}</p>
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
  )
}

NftModal.propTypes = {
  nft: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    }),
    purchaseUrl: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
}

export default NftModal
