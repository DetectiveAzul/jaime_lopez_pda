require('minitest/autorun')
require('minitest/rg')
require_relative('../card')

class TestCard < MiniTest::Test
  def setup
    @card01 = Card.new("Hearts", 4)
    @card02 = Card.new("Spades", 5)
    @card03 = Card.new("Clubs", 8)
    @card04 = Card.new("Diamonds", 1)
    @cards = [@card01, @card02, @card03, @card04]
  end

  def test_checkforAce__returns_true()
    result = Card.checkforAce(@card04)
    assert_equal(true, result)
  end

  def test_checkforAce__returns_false()
    result = Card.checkforAce(@card01)
    assert_equal(false, result)
  end

  def test_highest_card()
    result = Card.highest_card(@card01, @card02)
    assert_equal("Spades", result.suit)
  end

  def test_cards_total()
    result = Card.cards_total(@cards)
    assert_equal(18, result)
  end
end
