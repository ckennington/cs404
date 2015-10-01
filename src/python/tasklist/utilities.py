__author__ = 'abe'

import json


def decode_dict(data):
    """
    Helper for Python JSON decoding.
    @param data: The data to decode.
    @return: Dictionary.
    """
    return_value = {}
    for key, value in data.iteritems():
        if isinstance(key, unicode):
            key = key.encode('utf-8')
        if isinstance(value, unicode):
            value = value.encode('utf-8')
        elif isinstance(value, list):
            value = decode_list(value)
        elif isinstance(value, dict):
            value = decode_dict(value)
        return_value[key] = value
    return return_value


def decode_list(data):
    """
    Helper for Python JSON decoding.
    @param data: The data to decode.
    @return: List.
    """
    return_value = []
    for item in data:
        if isinstance(item, unicode):
            item = item.encode('utf-8')
        elif isinstance(item, list):
            item = decode_list(item)
        elif isinstance(item, dict):
            item = decode_dict(item)
        return_value.append(item)
    return return_value


def decode_record(record):
    """
    (Static) Helper for deJSONifying records.
    @param record: The record to decode.
    @return: Dict.
    """
    return json.loads(record, object_hook=decode_dict)


def encode_record(record):
    """
    (Static) Helper for JSONifying records.
    @param record: The data to encode.
    @return: The JSONified data.
    """
    return json.dumps(record)