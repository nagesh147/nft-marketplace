import React, { useState } from 'react'
import NftList from './components/NFTCard/NftList'
import NftModal from './components/NFTCard/NftModal'
import nftsData from './data/nfts'

function App() {
  const [selectedNft, setSelectedNft] = useState(null)

  const handleCardClick = (nft) => {
    setSelectedNft(nft)
  }

  const handleModalClose = () => {
    alert()
    console.log('handle modal close')
    setSelectedNft(null)
  }

  return (
    <div className="App">
      <h1 className="app-title">NFT Collection</h1>
      <NftList nfts={nftsData} onCardClick={handleCardClick} />
      {selectedNft && <NftModal nft={selectedNft} onClose={handleModalClose} />}
    </div>
  )
}

export default App
