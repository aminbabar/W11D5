json.array! @parties do |party|
    json.extract! party, :name, :location
    json.guests party.guests
end