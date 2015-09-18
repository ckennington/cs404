class Media  
  def initialize(name)  
    # attributes of a class begin with @
    @name =name  
  end  

  # to_s is Ruby's way of saying "to_string"
  def to_s  
    @name  
  end  
end  
  
module Debug  
  # Methods that act as queries are often  
  # named with a trailing ?  
  def who_am_i?  
    "#{self.class.name} (\##{self.object_id}): #{self.to_s}"  
  end  
end  
  
class Phonograph < Media
  # The include statement simply makes a reference to a named module.
  # If that module is in a separate file, use require to drag the file in  
  # before using include  
  include Debug  
end  
  
class EightTrack < Media 
  include Debug  
end  
  
ph = Phonograph.new("West End Blues")  
et = EightTrack.new("Surrealistic Pillow")  
puts ph.who_am_i?  
puts et.who_am_i?  
