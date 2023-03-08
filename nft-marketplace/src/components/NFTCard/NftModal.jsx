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
        <div>
          <span>
            <img
              src={nft.owner.profileImage}
              alt={nft.owner.name}
              style={{ borderRadius: '50%', width: '55px', height: '55px' }}
            />
          </span>
          <span style={{ position: 'relative', bottom: '20px', left: '15px' }}>
            Owned by {nft.owner.name}
          </span>
        </div>
        <p>{nft.description}</p>
        <p>Address: {nft.owner.address}</p>
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
