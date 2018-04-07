### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

require_relative('card.rb')
# Class CardGame does not have a proper end at the end of the file
# No initializing method
# No attr_reader, writers or accessors
class CardGame


#Card.value is not a valid method for class CardGame
# We should add this parameter to the class and also
# Make the proper method or attr_reader
# Taking in consideration this method needs a card object
# it would be better to:
# a) Turning a Class method
# b) Change the sintax to check self value instead of the
# value of the card variable it's passed when calling the
# method
# c) When using IF to check EQUAL, you use == instead of just one =
  def checkforAce(card)
    if card.value = 1
      return true
    else
      return false
    end
  end

# Along with no valid methods for value and name,
# a) the correct syntax for a method is "def", not "dif"
# b) return card.name is invalid, since the method does
# not have a "card" variable, only card1 and card2.
# c) Even if Ruby does not need a return, the else part of the
# if should add a return before card 2 to avoid possible
# problems.
# d) Also, there is an unexpected end (there is one extra
# end that it is not needed)
# e) A comma between card1 and card 2 on the parameters section
# it is mandatory when using more than one.
# f) If and Else does not have consistent returns values, why?
# g) Not an error, but the method should be indentated on a way
# the content is not on the exact same line, for better reading
# As previous method, this would work better
# as a Class method instead of an instance
# method
# h) In thi case, if Card1 and Card2 are equal value, the method
# will return card2, instead of returning nil or a message like
# same value

  dif highest_card(card1 card2)
  if card1.value > card2.value
    return card.name
  else
    card2
  end
end
end

# a) total should be declared as any kind of variable. In this
# case seems like an integer (is adding values), so it should
# be initialized with total = 0
# b) The return should be after the end statement of the for
# loop, if not, this will only iterates once before returning
# a value
# c) Adding total to "Your have a total of" will probably throw
# an error because it's trying to add a string and a integer, which cannot be added

def self.cards_total(cards)
  total
  for card in cards
    total += card.value
    return "You have a total of" + total
  end
end


```
