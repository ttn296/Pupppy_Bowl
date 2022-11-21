import { fetchAllPlayers, fetchSinglePlayer } from './ajaxHelpers'
import { renderAllPlayers, renderNewPlayerForm, renderSinglePlayer } from './renderHelpers'

const init = async () => {
  const players = await fetchAllPlayers()
  renderAllPlayers(players)
}

renderNewPlayerForm()
  
init()
