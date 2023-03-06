export const idlFactory = ({ IDL }) => {
  const Description = IDL.Record({
    'height' : IDL.Nat32,
    'colorspace' : IDL.Nat8,
    'channels' : IDL.Nat8,
    'width' : IDL.Nat32,
  });
  const SharedQOI = IDL.Record({
    'data' : IDL.Vec(IDL.Nat8),
    'desc' : Description,
  });
  const SharedBitmap = IDL.Record({
    'data' : IDL.Vec(IDL.Nat8),
    'desc' : Description,
  });
  const Result_2 = IDL.Variant({ 'ok' : SharedBitmap, 'err' : IDL.Null });
  const Result_1 = IDL.Variant({ 'ok' : SharedQOI, 'err' : IDL.Null });
  const PerceptualHash = IDL.Record({ 'theHash' : IDL.Vec(IDL.Nat8) });
  const Result = IDL.Variant({ 'ok' : PerceptualHash, 'err' : IDL.Null });
  return IDL.Service({
    'decodeQOI' : IDL.Func([SharedQOI], [Result_2], []),
    'encodeBitmap' : IDL.Func([SharedBitmap], [Result_1], []),
    'getPerceptualHash' : IDL.Func([SharedBitmap], [Result], []),
  });
};
export const init = ({ IDL }) => { return []; };
